import { NpmRunner, Printer, Render, YarnRunner, Question } from "../lib";
import { ActionAbstract } from "./action.abstract";

export class CreateAction extends ActionAbstract {
	// 输入的项目名称
	async resolve(projectName: string) {
		const answer = await new Question()
			.type()
			// .packageManager()
			.ask();

		const renderer = new Render();
		if (answer.type === "app") {
			renderer.developType("app");
		} else {
			renderer.developType("component");
		}
		renderer.source(this._source);
		renderer.destination(projectName);
		renderer.apply();

		console.log(answer, 233);

		if (answer.pm === "npm") {
			await new NpmRunner().directory(projectName).run("install");
		} else if (answer.pm === "yarn") {
			await new YarnRunner().directory(projectName).run("install");
		}

		Printer.power(projectName);
	}
}
