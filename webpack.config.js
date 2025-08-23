//importa assim pq ta usando no js no ambiente node
const path = require("path")

//exportar as configurações
module.exports = {
    target: "web",
    mode: "development",

    //define onde está o arquivo q eu vou usar
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        //onde o arquivo copilado vai ser armazenado
        path: path.resolve(__dirname, "dist")
    }
}