import {  ServerlessInstance, ServerlessOptions } from './@types/serverless';

export class AwsAlb {

    readonly serverless: ServerlessInstance;
    readonly options: ServerlessOptions;
    readonly hooks: { [key: string]: any };

    constructor(serverless: ServerlessInstance, options: ServerlessOptions) {
        this.serverless = serverless;
        this.options = options;
        this.hooks = {
            // fill me in
        };
    }

}

//module.exports = Oncall;
export default AwsAlb;