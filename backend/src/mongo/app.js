const app = require('./src/config/server')
const connection = require('./src/config/connection')

const Comentarios = require('./src/models/Comentarios')

app.get("/comentarios", async (req, res) =>{
    const resultado = await Comentarios.find()
    res.json(resultado)
})


app.post("/comentarios", async (req, res) => {
    const { nome } = req.body
    const { comentario } = req.body
    let resultado = await Comentarios.create({ nome, comentario })

    res.json(resultado)
})
