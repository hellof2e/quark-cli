/*
 * @Descripttion: 
 * @Author: yhy
 * @LastEditTime: 2021-04-01 10:42:09
 */
import { SwaggerRouter } from "koa-swagger-decorator";
import { general, user } from "./controller";

const router = new SwaggerRouter();

// 测试接口是否正常
router.get("/", general.helloWorld);

// app
router.get("/users", user.getUsers);
router.get("/users/:id", user.getUser);
// router.post("/users", user.createUser);
// router.put("/users/:id", user.updateUser);
// router.delete("/users/:id", user.deleteUser);
// router.delete("/testusers", user.deleteTestUsers);

// Swagger endpoint
router.swagger({
    title: "接口文档",
    description: "API REST using NodeJS and KOA framework, typescript. TypeORM for SQL with class-validators. Middlewares JWT, CORS, Winston Logger.",
    version: "0.0.1",
});

// mapDir will scan the input dir, and automatically call router.map to all Router Class
router.mapDir(__dirname);

export { router };