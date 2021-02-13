const app = require('./src/config/server')
const connection = require('./src/mongo/config/connection') 
const Comentarios = require('./src/mongo/models/Comentarios')

app.get("/", async (req, res) => {
    const resultado = await Comentarios.find()

    res.json(resultado)
})
app.post("/", async (req, res) => {
    const { nome, comentario } = req.body

    let resultado = await Comentarios.create({ nome,comentario })

    res.json(resultado)
})