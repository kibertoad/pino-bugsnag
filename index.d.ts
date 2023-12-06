import { Transform } from 'node:stream';
import { OnUnknown } from 'pino-abstract-transport';
import { NodeConfig } from '@bugsnag/node'

interface PinoBugsnagOptions_ {
    bugsnagConfig: NodeConfig
}

declare namespace PinoBugsnag {
    type BugsnagOptions = PinoBugsnagOptions_;
    type BugsnagStream = Transform & OnUnknown;
}

export default PinoBugsnag;
export { PinoBugsnag, PinoBugsnagOptions_ as PinoBugsnagOptions };
