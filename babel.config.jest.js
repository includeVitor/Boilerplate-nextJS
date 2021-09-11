module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: ['dynamic-import-node', 'inline-react-svg'],
    compact: false
}
