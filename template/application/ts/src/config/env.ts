
/**
 * 注意：根目录下的 env.js 由 atlas 发布平台写入
 */

export type Evn = "dev" | "fat" | "uat" | "pre" | "pro";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const env: Evn = require("../../env.js");

