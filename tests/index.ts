import * as chai from "chai";
//import * as chaiAsPromised from "chai-as-promised";
//import {expect} from "chai";
import AwsAlb from '../src';

before(() => {
    chai.should();
    //chai.use(chaiAsPromised);
});

// https://www.chaijs.com/api/bdd/
describe('AwsAlb', () => {
    it('works', async () => {
        const serverless = {
            cli: {
                log(args: any) { },
                consoleLog(args: any) { }
            },
            service: {
                service: 'foobar',
                provider: {
                    name: 'aws'
                }
            }
        };
        const alb = new AwsAlb(
            serverless, {}
        );
        chai.expect(alb).to.not.be.undefined

    });
});