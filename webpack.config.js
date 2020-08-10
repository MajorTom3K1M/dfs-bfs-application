const path = require('path');

module.exports = {
    entry: "./public/javascripts/maze.js",
    output: {
        path: path.resolve(__dirname),
        filename: "./public/javascripts/bundle.js"
    },
    devtool: 'source-map',
};
