export default function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: ['tests/**/*.spec.js'],
        preprocessors: {
            'tests/**/*.spec.js': ['webpack'],
        },
        webpack: {
            mode: 'development',
            module: {
                rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                    },
                }, ],
            },
        },
        reporters: ['progress', 'kjhtml'],
        browsers: ['Chrome'],
        singleRun: false,
        client: {
            clearContext: false,
        },
    });
}