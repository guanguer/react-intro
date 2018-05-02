const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    context: __dirname,
    entry: ['./src/client-app.jsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        contentBase: './dist',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: [path.resolve(__dirname, 'src/__test__')],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src',
                ignore: ['*.jsx', '*.js', '__test__/**/*']
            }
        ]),
        new webpack.NamedModulesPlugin()
    ]
};

if (process.env.NODE_ENV === 'development') {
    config.entry = [
        'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000',
        ...config.entry
    ];
    config.plugins = [
        ...config.plugins,
        new webpack.HotModuleReplacementPlugin()
    ];
    config.devtool = 'cheap-eval-source-map';
}

module.exports = config;
