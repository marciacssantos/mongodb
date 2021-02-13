
import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Card } from 'reactstrap'


function ListaComentarios() {
    const [listComment, setComentarios] = useState([]);
    useEffect(async () => {
        const url = await fetch("http://localhost:8080/comentarios")
        const dados = await url.json()
        setComentarios(dados)
    }, []);

    {
        listComment.map((item) => {
            return (
                <Card className="p-3 col-12">
                    Cliente: {item.nome} <hr />
                    Comentário: {item.comentario}
                </Card>
            )
        })
    }
}

export default ListaComentarios;