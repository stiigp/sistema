import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import Formulario from "./Formularios/Formulario";
import {produtos} from "../../dados/mockProdutos"

export default function TelaCadastroProduto(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  return (
    <div>
      <Pagina>
        <Alert classname="mt-02 mb-02 success text-center" variant="success">
          <h2>
            Cadastro de Produto
          </h2>
        </Alert>
        {
          exibirTabela ? <TabelaProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela}/> : <Formulario classe="produto"/>
          
        }
      </Pagina>
    </div>
  )
}