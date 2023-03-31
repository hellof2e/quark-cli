import axios from "axios";
import { env } from "../config/env";

interface Params {
    appId: string;
    token: string;
    jdbcToken: string;
    dbKey?: string;
}

interface Headers {
    token: string;
}

let host = "";
if (env === "fat" || env === "uat") {
    host = `https://${env}-basicconf.hellobike.cn`;
} else if (env === "pro" || env === "pre") {
    host = "http://basic-conf-inner.hellobike.cn";
}

const getConfig = async (params: Params, headers: Headers) => {
    const res = await axios.post(`${host}/jdbc/pool/atom/atom/v2`, params, { headers });
    const { code, data, msg } = res.data;

    if (code !== 0) {
        console.log("fail to request pg items config:", msg);
        return;
    }

    return data;
};

export default async () => {
    const headers = {
        token: "0x1304384",
    };

    // TODO：自行配置
    // 数据库 token，需要申请：http://fat-auth-ops.hellobike.cn/#/token/db
    let mysqlToken = "";
    if (env === "fat") {
        mysqlToken = "11111111111111111";
    } else if (env === "uat") {
        mysqlToken = "11111111111111111";
    } else if (env === "pro" || env === "pre") {
        mysqlToken = "11111111111111111";
    }

    // TODO：自行配置
    const params = {
        appId: "projectName",
        token: mysqlToken,
        jdbcToken: mysqlToken,
        dbKey: "",
    };

    // 李令建：请求的addr 是auth运维平台的地址，比如fat是 https://fat-basicconf.hellobike.cn
    const res = await axios.post(`${host}/jdbc/pool/group/v2`, params, { headers });

    const { code, data, msg } = res.data;

    // console.log(request pg config, env, res);

    if (code !== 0) {
        console.log(`fail to request pg config on env: ${env}`, msg);
        return;
    }

    const poolsConfig = [];
    for (const item of data.groupList) {
        params["dbKey"] = item.dbKey;
        const configItem = await getConfig(params, headers);
        poolsConfig.push(configItem);
    }

    return poolsConfig; // [{id: xx, host: xx, ...}]
};