import { ActionAbstract } from "./action.abstract";
export declare class CreateAction extends ActionAbstract {
    resolve(projectName: string): Promise<void>;
}
