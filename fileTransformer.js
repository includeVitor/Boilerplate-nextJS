/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
const path = require('path')

module.exports = {
    process(src, filename, config, options) {
        return (
            'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
        )
    }
}
