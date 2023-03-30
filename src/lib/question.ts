import inquirer from 'inquirer';

export class Question {
  private inquirer = inquirer;


  private promptList: inquirer.QuestionCollection[] = [];

  language() {
    this.promptList.push({
      type: 'list',
      name: 'lang',
      message: 'Which one to use for development?',
      choices: [
        {
          name: 'typescript',
          value: 'ts'
        },
        {
          name: 'javascript',
          value: 'js'
        },
      ],
    });
    return this;
  }

  packageManager() {
    this.promptList.push({
      type: 'list',
      name: 'pm',
      message: 'Which package manager you want?',
      choices: [
        {
          name: 'npm',
          value: 'npm'
        },
        {
          name: 'yarn',
          value: 'yarn'
        },
        {
          name: 'skip install',
          value: ''
        },
      ],
    });
    return this;
  }

  async ask() {
    return this.inquirer.prompt(this.promptList);
  }
}