import { useState, useEffect } from 'react';
import Produto from '../Components/Produto';
import { Container, Row, Col } from 'react-bootstrap';
import './estilos/produtos.css'

function Produtos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3333/produtos")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);


    return (
       <Container fluid={true}>
           <Row>
               <Col className="col-3">
               <div className="list-group text-center">
                    <h4 className="h4 text-center ">Categorias</h4><br/>
                    <a href="#" className="list-group-item list-group-item-action" >Todos(12)</a>
                    <a href="#" className="list-group-item list-group-item-action">Geladeira(3)</a>
                    <a href="#" className="list-group-item list-group-item-action">Fogão(2)</a>
                    <a href="#" className="list-group-item list-group-item-action">Microondas(3)</a>
                    <a href="#" className="list-group-item list-group-item-action">Lavadora(2)</a>
                    <a href="#" className="list-group-item list-group-item-action">Lava-louça(2)</a>
                </div>
               </Col>

               <Col className="col-9">
                    <div className="prod">
                        <Row>
                            {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} categoria={item.categoria} preco={item.preco} preco_venda={item.preco_venda} />)}
                        </Row>
                    </div>
                </Col>
                
            </Row>
        
            
       </Container>
       
    )
}

export default Produtos;
