import Formulario from "./Formularios/Formulario"
import Cabecalho from "../layouts/Cabecalho"

export default function TelaCadastroFornecedor(props) {
  return (
    <>
      <Cabecalho titulo="Cadastro de fornecedores"/>
      <Formulario classe = "fornecedor"/>
    </>
  )
}