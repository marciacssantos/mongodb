import './produto.css'
import { Button } from 'react-bootstrap'


function Produto(props) {
    console.log(props);
    return (
        <>
    
        <div className="card border-0 col-3">
            <img className="card-img-top" src={require(`./img/${props.imagem}`).default} alt="Produto" />
            <div className="card-body">
                <h5 className="card-title">{props.descricao}</h5>
                <p className="card-text"><strike>R${props.preco}</strike> <br />R${props.preco_venda}</p>
            </div>
                <center><Button className="btn btn-success">Comprar</Button></center>
        </div>
        </>
    )
}
export default Produto;