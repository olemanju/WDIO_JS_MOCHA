import type { Options } from '@wdio/types'
import { config as baseconfig } from './wdio.conf';

export const config: Options.Testrunner = {
...baseconfig,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
    bail: 0
   
}
