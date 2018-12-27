
export interface ServerlessInstance {
    cli: {
        log(args: any): any
        consoleLog(args: any): any
    };
    service: {
        service: string
        provider: {
            name: string
        }
    };
}

export interface ServerlessOptions {
    function?: string;
}

export interface ServerlessFunction {
    handler: string;
    events?: { [key: string]: object };
}
