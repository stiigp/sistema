import { useState } from "react";
import Pagina from "../layouts/Pagina";
import { Alert } from "react-bootstrap";
import TabelaCategorias from "./Tabelas/TabelaCategorias";
import FormularioCategorias from "./Formularios/FormularioCategorias";
import { categorias } from "../../dados/mockCategorias"

export default function TelaCadastroCategoria(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  return (
    <div>
      <Pagina>
        <Alert classname="mt-02 mb-02 success text-center" variant="success">
          <h2>
            Cadastro de Categoria
          </h2>
        </Alert>
        {
          exibirTabela ? <TabelaCategorias listaDeCategorias={categorias} setExibirTabela={setExibirTabela} /> : <FormularioCategorias setExibirTabela={setExibirTabela} />

        }
      </Pagina>
    </div>
  )
}