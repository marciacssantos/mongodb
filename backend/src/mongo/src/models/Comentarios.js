const { Schema, model } = require('mongoose')

const ComentariosSchema = new Schema({
    nome: {
        type: String
    },

    comentario: {
        type: String
    }
})

const modelo = model("comentarios", ComentariosSchema)

module.exports = modelo