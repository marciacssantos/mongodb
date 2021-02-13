const mongoose = require('mongoose')

function connection(){
    mongoose.connect("mongodb://localhost/comments", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("Conexão realizada com sucesso")
    })
    .catch((err) => {
        console.log("Erro ao conectar com o banco: " + err)
    })
}

module.exports = connection()