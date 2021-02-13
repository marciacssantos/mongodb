import { Switch, Route } from 'react-router-dom';

import Produtos from './Pages/Produtos';
import Promocoes from './Pages/Promocoes';
import Home from './Pages/Home';
import Lojas from './Pages/Lojas';
import Comentarios from './Pages/Comentarios'

function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/promocoes" component={Promocoes} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/comentarios" component={Comentarios} />
        </Switch>
    )
}

export default Rotas;
