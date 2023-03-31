import { ActionAbstract } from './action.abstract';
export declare class CreateAction extends ActionAbstract {
    resolve(name: string): Promise<void>;
}
