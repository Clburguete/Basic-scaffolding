const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/client/index.js'),
    },
    module: {
        rules: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src/frontend` directory
                include: [
                    path.resolve(__dirname, 'src/client'),
                ],

                // Only run `.js` files through Babel
                test: /\.js?$/,
                options: { presets: ['es2015'] }
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"
    },
};