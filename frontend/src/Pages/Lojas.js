import './estilos/lojas.css'
import Loja1 from './img/loja1.jpg';
import Loja2 from './img/loja2.jpg';
import Loja3 from './img/loja3.jpg';
import {Container, Row, Card} from 'react-bootstrap'

function Lojas(){
    return(
        <Container>
            <h4><center>Nossas Lojas</center></h4>
            <Row className="ml-5">
                <Card>
                    <img  src={Loja1} alt="loja de São Paulo"/>
                    <h5 className="card-title">São Paulo</h5><hr/>
                    <div className="card-body">
                    <p className="card-text">Av.do Estado, 2473</p>

                    </div>
                    
                    
                </Card>
                <Card>
                    <img src={Loja2} alt="Loja do Rio de Janeiro"/>
                    <h5 className="card-title">Rio de Janeiro</h5><hr/>
                    <div className="card-body">
                    <p className="card-text">Rua Professor Eurico Rabelo, 512</p>

                    </div>
                    
                    
                </Card>
                <Card>
                    <img src={Loja3} alt="Loja de Minas Gerais" />
                    <h5 className="card-title">Minas Gerais</h5><hr/>
                    <div className="card-body">
                    <p className="card-text">Avenida Pedro Linhares Gomes, 719</p>

                    </div>
                    
                    
                </Card>
            </Row>
        </Container>
        

    )
}

export default Lojas;