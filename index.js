'use strict'

const pump = require('pump')
const { Transform } = require('readable-stream')
const abstractTransport = require('pino-abstract-transport')

function build (opts = {}) {
    const pretty = prettyFactory(opts)
    return abstractTransport(function (source) {
        const stream = new Transform({
            objectMode: true,
            autoDestroy: true,
            transform (chunk, enc, cb) {
                //send error here
                //fs.writeFileSync('pretty.file', chunk)

                const line = pretty(chunk)
                cb(null, line)
            }
        })

        pump(source, stream)
        return stream
    }, { parse: 'lines' })
}

module.exports = build
module.exports.default = build
