const packageJson = require('./package.json')
const withImages = require('next-images')

/**
 * Descomente o código abaixo para rodar o bundle analyzer
 */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer({})

module.exports = withImages({
    env: {
        APP_VERSION: packageJson.version
    },
    esModule: true
    // images: {
    //     domains: ['']
    // }
})
