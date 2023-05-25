import inquirer from 'inquirer';

export class Question {
  private inquirer = inquirer;


  private promptList: inquirer.QuestionCollection[] = [];

  type() {
    this.promptList.push({
      type: 'list',
      name: 'type',
      message: 'Which one to use for development?',
      choices: [
        {
          name: 'component',
          value: 'component'
        },
        {
          name: 'app',
          value: 'app'
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
          name: 'skip install',
          value: ''
        },
        {
          name: 'npm',
          value: 'npm'
        },
        {
          name: 'yarn',
          value: 'yarn'
        },
      ],
    });
    return this;
  }

  async ask() {
    return this.inquirer.prompt(this.promptList);
  }
}