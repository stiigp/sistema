import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import TabelaClientes from "./Tabelas/TabelaClientes";
import FormularioClientes from "./Formularios/FormularioClientes";
import { clientes } from "../../dados/mockClientes"

export default function TelaCadastroCliente(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  return (
    <div>
      <Pagina>
        <Alert classname="mt-02 mb-02 success text-center" variant="success">
          <h2>
            Cadastro de Cliente
          </h2>
        </Alert>
        {
          exibirTabela ? <TabelaClientes listaDeClientes={clientes} setExibirTabela={setExibirTabela} /> : <FormularioClientes setExibirTabela={setExibirTabela} />
        }
      </Pagina>
    </div>
  )
}