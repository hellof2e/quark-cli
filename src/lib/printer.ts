// import figlet from "figlet";
import chalk from "chalk";
import path from "path";
import sh from "shelljs";

export class Printer {
  static power(projectName: string, startTime: number) {

    const defaultTargetDir = projectName ? projectName : "my-app";
    const cwd = process.cwd();
    const root = path.join(cwd, defaultTargetDir);


    const endTime = Date.now();
    console.log(`\n ✨ Done in ${(endTime - startTime) / 1000}s\n`);

    sh.exec(`clear`);

    console.log(`Success!`);
    console.log(`Inside that directory, you can run several commands:\n`);

    console.log(` ${chalk.hex("#5ce9fa").bold("npm run dev")}`);
    console.log(`   Starts the development server.\n`);

    console.log(` ${chalk.hex("#5ce9fa").bold("npm run build")}`);
    console.log(
      `   Bundles the component inro static files for production.\n`
    );

    console.log(` ${chalk.hex("#5ce9fa").bold("npm run test")}`);
    console.log(`   Starts the test runner.\n`);

    console.log(` We suggest that you begin by typing:\n`);
    console.log(
      `   ${chalk.hex("#5ce9fa").bold(`\n cd`)} ${path.basename(root)}`
    );
    console.log(`   ${chalk.hex("#5ce9fa").bold(`\n npm run dev`)}\n`);

    console.log("Happy hacking!");

    // console.log(root, cwd, start, 111);

    // figlet("Hello Quark", (err, data) => {
    //   if (err) {
    //     console.log("Something went wrong...");
    //     console.dir(err);
    //     return;
    //   }
    //   console.log(data);

    //   const endTime = Date.now();
    //   console.log(`\n ✨ Done in ${(endTime - startTime) / 1000}s\n`);

    //   console.log(`Success!`);
    //   console.log(`Inside that directory, you can run several commands:\n`);

    //   console.log(` ${chalk.hex("#5ce9fa").bold("npm run dev")}`);
    //   console.log(`   Starts the development server.\n`);

    //   console.log(` ${chalk.hex("#5ce9fa").bold("npm run build")}`);
    //   console.log(
    //     `   Bundles the component inro static files for production.\n`
    //   );

    //   console.log(` ${chalk.hex("#5ce9fa").bold("npm run test")}`);
    //   console.log(`   Starts the test runner.\n`);

    //   console.log(` We suggest that you begin by typing:\n`);
    //   console.log(
    //     `   ${chalk.hex("#5ce9fa").bold(`\n cd`)} ${path.basename(root)}`
    //   );
    //   console.log(`   ${chalk.hex("#5ce9fa").bold(`\n npm run dev`)}\n`);

    //   console.log("Happy hacking!");
    // });
  }
}
