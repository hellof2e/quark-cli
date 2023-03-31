import fetchDbConfig from "./config/db";
import { env } from "./config/env";

export interface Config {
  serverPort: number;
  port: number;
  host: string;
  dbport: number;
  username: string;
  password: string;
  database: string;
  // debugLogging?: boolean; // 中间件调试是否开启
  dbsslconn: boolean;
  dbEntitiesPath: string[];
  synchronize: boolean;
}

const isLocal = ~["dev"].indexOf(env);

export default async function init(callback: (params: Config) => void) {
  let data = [];

  // 数据库，本地环境！
  if (isLocal) {
    data = [{
      port: 3306,
      host: "127.0.0.1",
      username: "root",
      password: "111111",
      database: "local_hello_123",
      cache: false
    }];
  } else {
    // 数据库，测试/线上环境！
    data = await fetchDbConfig();
  }
  data[0].serverPort = 3000; // server port
  data[0].debugLogging = isLocal;
  data[0].dbsslconn = !isLocal;
  data[0].synchronize = isLocal;
  data[0].cache = false;

  // 本地开发 && 链接库链接 fat 或 uat 数据库
  if (~["dev", "fat", "uat"].indexOf(env) && process.env.NODE_ENV === "development") {
    data[0].dbEntitiesPath = ["./src/entity/**/*.ts"];
  } else {
    data[0].dbEntitiesPath = ["./dist/entity/**/*.js"];
  }
  callback(data[0]);
}
