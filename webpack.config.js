const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                    [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    ]
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    }
}
