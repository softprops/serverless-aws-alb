import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
//import {expect} from "chai";
import AwsAlb = require("../src");
import { Provider } from '../src/@types/serverless';

before(() => {
    chai.should();
    chai.use(chaiAsPromised);
});

// https://www.chaijs.com/api/bdd/
describe('AwsAlb', () => {
    it('requires serverless.provider to be aws', async () => {
        const serverless = {
            cli: {
                log(args: any) { },
                consoleLog(args: any) { }
            },
            service: {
                service: 'foobar',
                provider: {
                    name: 'notaws'
                }
            },
            getProvider(name: string): Provider  {
                return {
                    request(svc: string, operation: string, args?: object) {
                        return Promise.resolve({});
                    }
                };
            }
        };
        const alb = new AwsAlb(
            serverless, {}
        );
        return alb.deploy().should.be.rejectedWith(Error)
    });
});