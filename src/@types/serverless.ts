
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
    getProvider(name: string): Provider;
}

export interface Provider {
    request(svc: string, operation: string, args?: object): Promise<object>;
}

export interface ServerlessOptions {
    function?: string;
}

export interface ServerlessFunction {
    handler: string;
    events?: { [key: string]: object };
}
