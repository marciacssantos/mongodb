const express = require('express');
const cors = require("cors");
const mysql = require("mysql"); 

const server = express();

server.use(express.json())
server.use(cors())


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})



server.get("/", (req, res) => {
    res.send("Testando")
})

server.get("/produtos", (req, res) => {
    connection.query("SELECT * FROM produtos", (error, result) => {
            if (error){
                res.send(error)
            } else {
                res.send(result)
            }
        })
    });

    server.get("/promocao", (req, res) => {
        connection.query("SELECT c.modelo, p.valor, c.imagem FROM celular as c INNER JOIN preco as p on c.valor = p.id WHERE p.valor < 2000", (error, result) => {
                if (error){
                    res.send(error)
                } else {
                    res.send(result)
                }
            })
        });
    


server.listen(3333)