import {  ServerlessInstance, ServerlessOptions, Provider } from './@types/serverless';

export = class AwsAlb {

    readonly serverless: ServerlessInstance;
    readonly options: ServerlessOptions;
    readonly provider: Provider;
    readonly hooks: { [key: string]: any };

    constructor(serverless: ServerlessInstance, options: ServerlessOptions) {
        this.serverless = serverless;
        this.options = options;
        this.provider = this.serverless.getProvider('aws');
        this.hooks = {
            // fill me in
        };
    }

    async addPermission() {

    }

    // https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html
    // https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html
    async createTargetGroup() {

    }

    async registerTarget() {

    }

    async deleteTarget() {

    }


    async createListenerRule() {


    }

    async deploy() {
        const providerName = this.serverless.service.provider.name;
        if (providerName !== "aws") {
            throw new Error(
                `The AwsAlb plugin requires services to use the "aws" provider. This service uses the "${providerName}" provider `
                );
        }
    }
};