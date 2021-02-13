
import { Form, Input, Label, Button, Card } from 'reactstrap'
import React, { Component } from 'react'
// import { useState, useEffect } from 'react';
import axios from 'axios'

class Comentario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            comentario: '',
            comentarios: new Array()
        }
    }

    // comments = async () => {
    //     const [comentarios, setComentarios] = useState([])
    //     useEffect(async () => {
    //         const url = await fetch("http://localhost:8080/comentarios")
    //         const dados = await url.json()
    //         setComentarios(dados)
    //     }, [])
    // }

    componentDidMount() {
        this.getComments();
    }

    getComments = async () => {
        const pureData = await fetch("http://localhost:8080/comentarios");
        const allData = await pureData.json();
        this.setState({ comentarios: allData});
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = async event => {
        event.preventDefault()
        console.log(this.state)
        await axios.post("http://localhost:8080/comentarios", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
        this.setState({ nome: '', comentario: '' });
        this.getComments();
    }

    render() {

        const { nome, comentario } = this.state
        return (
            <>
                <h2><center>Conte um pouco sobre sua experiência de compra!!</center></h2><br/><br/>
                <Form onSubmit={this.submitHandler} className="col-6 pb-5 m-auto">
                    <div>
                        <Input type="text" name="nome" value={nome} onChange={this.changeHandler} placeholder="nome" />
                    </div>
                        <br/>
                    <div>
                        <Input type="text" name="comentario" value={comentario} onChange={this.changeHandler} placeholder="comentario" />
                    </div>
                    <Button type="submit" className="btn-success col-3 m-3 ml-4">Cadastrar</Button>
                </Form>
                {this.state.comentarios.map((item) =>{
                    return(
                        <Card key={item.id} className="p-3 col-8 m-auto">
                            Cliente: {item.nome} <hr/>
                            Comentario: {item.comentario}
                        </Card>
                    )
                })}
            </>


        )

    }
}

export default Comentario;