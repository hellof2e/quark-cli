import inquirer from 'inquirer';
export declare class Question {
    private inquirer;
    private promptList;
    type(): this;
    ask(): Promise<inquirer.Answers>;
}
