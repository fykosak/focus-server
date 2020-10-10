const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

module.exports = {
    devtool: 'source-map',
    entry: './app/index.ts',
    target: 'node',

    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/dist'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin(/* { configFileName, compiler } */)
        ],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
                //use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
};
