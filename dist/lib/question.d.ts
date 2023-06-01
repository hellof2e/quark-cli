import inquirer from 'inquirer';
export declare class Question {
    private inquirer;
    private promptList;
    type(): this;
    packageManager(): this;
    ask(): Promise<inquirer.Answers>;
}
