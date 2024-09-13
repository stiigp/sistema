import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";
import Formulario from "./Formularios/Formulario";
import { fornecedores } from "../../dados/mockFornecedores"

export default function TelaCadastroFornecedor(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  return (
    <div>
      <Pagina>
        <Alert classname="mt-02 mb-02 success text-center" variant="success">
          <h2>
            Cadastro de Fornecedor
          </h2>
        </Alert>
        {
          exibirTabela ? <TabelaFornecedores listaDeFornecedores={fornecedores} setExibirTabela={setExibirTabela} /> : <Formulario classe="fornecedor" />

        }
      </Pagina>
    </div>
  )
}