import TelaCadastroFornecedor from './componentes/Telas/TelaCadastroFornecedor';
import TelaCadastroCliente from './componentes/Telas/TelaCadastroCliente'
import Tela404 from './componentes/Telas/Tela404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaMenu from './componentes/Telas/TelaMenu';
import TelaCadastroProduto from './componentes/Telas/TelaCadastroProduto';
import TelaCadastroCategoria from './componentes/Telas/TelaCadastroCategoria';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      {
        //A ordem das rotas é importante
      }
      <Routes>
        <Route path="/fornecedor" element={<TelaCadastroFornecedor/>}/>
        <Route path="/cliente" element={<TelaCadastroCliente/>}/>
        <Route path="/produto" element={<TelaCadastroProduto />} />
        <Route path="/categoria" element={<TelaCadastroCategoria/>}/>
        <Route path="/" element={<TelaMenu/>}/>
        <Route path="/*" element={<Tela404/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
