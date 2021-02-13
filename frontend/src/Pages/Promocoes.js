import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

function Promocoes(){
    const [promocoes, setPromocoes] = useState([]);
        useEffect(async () => {
            const url = await fetch("http://localhost:3333/promocao")
            const dados = await url.json()
            setPromocoes(dados);
        }, []);


        return (
            <>
            <h4><center>Aqui você encontra os melhores smartphones por menos de R$2000,00</center></h4><br/>
                {promocoes.map((item) => {
                    return (
                        
                        <div className="list-group col-4 m-auto">
                        <li className="list-group-item">
                            <img src={require(`./Celular/${item.imagem}`).default} />
                           <center>
                             {item.modelo} <br/>
                        
                             R${item.valor}
                           </center>
                            
                            <center><Button className="btn btn-success">Comprar</Button></center>
                        </li>
                    <br/>
                    </div>
                        
                        
                    );
                })}

            </>
        )

    }    
export default Promocoes;