const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/, // определяем тип файлов
                loader: "babel-loader", // исключаем из обработки папку node_modules
                exclude: /(node_modules)/, // определяем загрузчик
                options: {
                    presets: ["@babel/preset-react"] // используемые плагины
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};