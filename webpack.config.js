const path = require('path')

const config = {
    target: 'node',
    mode: 'production',
    entry: './lib/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        library: 'auto-increment-plugin',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js', '.json' ],
    },
}

const umd = Object.assign({}, config, {
    output: {
        libraryTarget: 'umd',
        filename: 'auto-increment-plugin.js',
    },
})

const min = Object.assign({}, config, {
    output: {
        libraryTarget: 'umd',
        filename: 'auto-increment-plugin.min.js',
    },
    optimization: {
        minimize: true,
    },
})

const commonjs = Object.assign({}, config, {
    output: {
        libraryTarget: 'commonjs',
        filename: 'auto-increment-plugin.common.js',
    },
})

const esmodule = Object.assign({}, config, {
    output: {
        libraryTarget: 'module',
        filename: 'auto-increment-plugin.esm.js',
    },
    experiments: {
        outputModule: true,
    },
})

module.exports = [ umd, min, commonjs, esmodule ]
