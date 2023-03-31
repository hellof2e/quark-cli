import { BaseContext } from "koa";

interface DataType {
    code: number;
    data?: any;
    msg: string;
}

export const createSuccessResponse = (ctx: BaseContext, data: DataType) => {
    ctx.response.type = "json";
    ctx.status = 200;
    ctx.body = data;
};

export const createIllegalResponse = (ctx: BaseContext, data: DataType) => {
    ctx.response.type = "json";
    ctx.body = data;
    ctx.status = 400;
};
