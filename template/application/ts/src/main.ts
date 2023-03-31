import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import cors from "@koa/cors";
import winston from "winston";
import { createConnection } from "typeorm";
import { cron } from "./cron";
import { logger } from "./middleware/logger";
import { router } from "./routes";
import "reflect-metadata";

import init from "./init";

// db init
init((config) => {
  // db connect
  createConnection({
      type: "mysql",
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      // 同步，打开会同步实体，alter table！不允许修改 table 结构，本地可以打开
      synchronize: config.synchronize,
      logging: false,
      entities: config.dbEntitiesPath,
      bigNumberStrings: true,
  }).then(async () => {
  
      const app = new Koa();
  
      // Provides important security headers to make your app more secure
      app.use(helmet());
  
      // cors
      app.use(cors({
        credentials: true,
      }));
  
      // Logger middleware -> use winston as logger (logging.ts with config)
      app.use(logger(winston));
  
      // Enable bodyParser with default options
      app.use(bodyParser());
  
      app.use(router.routes()).use(router.allowedMethods());

      // Register cron job to do any action needed
      // cron.start();
      
      app.listen(config.serverPort);
  
      console.log(`Server running on port is: ${config.serverPort}`);
  }).catch((error: string) => {
      console.log("TypeORM connection error: ", error);
  });
});
