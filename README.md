# pino-bugsnag
Bugsnag transport for Pino 7+

## Basic usage

```ts
    const transports = [
    {
        target: 'pino-bugsnag',  // Use the bugsnag transport
        options: { bugsnagConfig: { 
            // config goes here
            } }  // Bugsnag options
    }
    // ... you can add more transports as needed
];

const logger = pino({
        enabled: true,
        level: 'info'
    }, pino.transport({ targets: transports })
);

logger.info('This is an info message');
logger.error(new Error(), 'This is an error message.');

```
