import type { Options } from '@wdio/types'
import { config as baseconfig } from './wdio.conf'
//alice is used above bz both base and current class same object config
export const config: Options.Testrunner = {
    ...baseconfig,

    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true
        }
    ]
    
}
