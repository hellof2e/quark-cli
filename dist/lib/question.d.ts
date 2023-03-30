import inquirer from 'inquirer';
export declare class Question {
    private inquirer;
    private promptList;
    language(): this;
    packageManager(): this;
    ask(): Promise<inquirer.Answers>;
}
