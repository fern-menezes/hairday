//importa assim pq ta usando no js no ambiente node
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { template } = require("lodash")
const CopyWebpackPlugin = require("copy-webpack-plugin")

//exportar as configurações
module.exports = {
    target: "web",
    //mode: "development",
    mode: "production",

    //define onde está o arquivo q eu vou usar
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        //onde o arquivo copilado vai ser armazenado
        path: path.resolve(__dirname, "dist"),
        publicPath: "./"
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            favicon: path.resolve("src", "assets", "scissors.svg"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "src", "assets" )
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                        sourceType: "unambiguous"
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
        ],
    },

}