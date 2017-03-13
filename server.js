const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const webpackConfig = './webpack.config.js';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.set('port', (3050 || process.env.PORT));

const server = app.listen(app.get('port'), () => {
    const port = server.address().port;

    console.log(`listening on por: ${port}`);
});
