import Formulario from "./Formularios/Formulario"
import Cabecalho from "../layouts/Cabecalho"
import Pagina from "../layouts/Pagina"

export default function TelaCadastroFornecedor(props) {
  return (
    <>
      <Pagina>
        <Cabecalho titulo="Cadastro de fornecedores"/>
        <Formulario classe = "fornecedor"/>
      </Pagina>
    </>
  )
}