const webpack = require('webpack');

module.exports = function override(config) {
    config.resolve.fallback = {
        "path": require.resolve('path-browserify'),
        "crypto": require.resolve('crypto-browserify'),
        "stream": require.resolve('stream-browserify'),
        "assert": require.resolve('assert'),
        "http": require.resolve('stream-http'),
        "https": require.resolve('https-browserify'),
        "os": require.resolve('os-browserify'),
        "url": require.resolve('url'),
        "buffer": require.resolve('buffer/'),
        "process": require.resolve('process/browser')
    }
    
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ])
    
    return config;
}
