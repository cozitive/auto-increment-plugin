module.exports = {
    target: 'node',
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: __dirname,
        publicPath: './',
        filename: 'index.js',
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
