declare type RunnerBinary = 'npm' | 'yarn';
export declare class Runner {
    private binary;
    private _directory;
    constructor(binary: RunnerBinary);
    directory(directory: string): this;
    run(...args: string[]): Promise<string | null>;
}
export {};
