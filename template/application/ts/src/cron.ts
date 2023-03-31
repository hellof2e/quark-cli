import { CronJob } from "cron";

const cronJobExpression = "0 * * * *";
const cron = new CronJob(cronJobExpression, () => {
    console.log("Executing cron job once every hour");
});

export { cron };