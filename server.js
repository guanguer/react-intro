/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const lodash = require('lodash');
const fs = require('fs');
const compression = require('compression');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const config = require('./webpack.config');
const App = require('./src/App').default;

const { StaticRouter } = ReactRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./dist/index.html');
const template = lodash.template(baseTemplate);

const server = express();

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);
    server.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        })
    );
    server.use(webpackHotMiddleware(compiler));
}

server.use(compression());
server.use('/', express.static('./dist'));

server.use((req, res) => {
    const context = {};
    const body = ReactDomServer.renderToString(
        React.createElement(
            StaticRouter,
            { location: req.url, context },
            React.createElement(App)
        )
    );

    if (context.url) {
        res.redirect(context.url);
    }
    res.write(template({ body }));
    res.end();
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
