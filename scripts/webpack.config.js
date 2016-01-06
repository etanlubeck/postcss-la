module.exports = {
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },
    postcss: function () {
        'use strict';
        return [require('autoprefixer'), require('precss')];
    }
};
