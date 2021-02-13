import Menu from './Components/Menu';
import {BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
      <div className="App">
          <header>
              <Menu />
          </header>
          <main>
            <Rotas />
          </main>
        </div>

      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
