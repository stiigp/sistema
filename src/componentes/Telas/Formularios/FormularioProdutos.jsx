import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { consultar } from "../../../services/produtoService";
import { Container } from "react-bootstrap";
import {gravar, atualizar} from "../../../services/produtoService"
import { useEffect, useState } from "react";

export default function FormularioProdutos(props) {
  
  const [formValidado, setFormValidado] = useState(false);
	const [categorias, setCategorias] = useState([]);
  
  const produtoReseta = {
    categoria: {
      codigo: "",
      descricao: ""
    },
    codigo: 0,
    descricao: "",
    precoCusto: 0,
    precoVenda: 0,
    qtdEstoque: 0,
    urlImagem: "",
    dataValidade: ""
  };

  function manipularSubmissao(evento) {
		const form = evento.currentTarget;
		if (form.checkValidity()) {
			setFormValidado(false);
			if (!props.modoEdicao) {
				gravar(props.produtoSelecionado)
					.then((res) => {
						if (res.status) {
							props.setProdutoSelecionado(produtoReseta);
							props.setModoEdicao(false);
							props.setExibirTabela(true);
						}
						window.alert(res.mensagem);
					})
					.catch((erro) => {
						window.alert(erro.mensagem);
					})
			}
			else {
				atualizar(props.produtoSelecionado)
					.then((res) => {
						if (res.status) {
							props.setProdutoSelecionado(produtoReseta);
							props.setModoEdicao(false);
							props.setExibirTabela(true);
						}
						window.alert(res.mensagem);
					});
			}
		}
		else {
			setFormValidado(true);
		}
		evento.preventDefault();
		evento.stopPropagation();
	}
  
	function manipularMudanca(evento) {
		const elemento = evento.target.name;
		const valor = evento.target.value;
		if (elemento === 'categoria') {
			props.setProdutoSelecionado({
				...props.produtoSelecionado,
				[elemento]: { codigo: valor }
			});
		}
		else {
			props.setProdutoSelecionado({
				...props.produtoSelecionado,
				[elemento]: valor,
			});
		}
		console.log(props.produtoSelecionado);
	}

  return (
    <Container>
      <Form onSubmit={manipularSubmissao}>
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control
            id="codigo"
            name="codigo"
            type="text"
            placeholder="Insira o código do produto"
            value={props.produtoSelecionado.codigo}
            onChange={manipularMudanca}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço de custo</Form.Label>
          <Form.Control
            type="text"
            name="precoCusto"
            value={props.produtoSelecionado.precoCusto}
            onChange={manipularMudanca}
            placeholder="Insira o preço de custo"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço de venda</Form.Label>
          <Form.Control
            type="text"
            name="precoVenda"
            value={props.produtoSelecionado.precoVenda}
            onChange={manipularMudanca}
            placeholder="Insira o preço de venda"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            name="descricao"
            value={props.produtoSelecionado.descricao}
            onChange={manipularMudanca}
            placeholder="Insira a descrição do produto"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Qtd. do Estoque</Form.Label>
          <Form.Control
              type="text"
            name="qtdEstoque"
            value={props.produtoSelecionado.qtdEstoque}
            onChange={manipularMudanca}
            placeholder="Insira a qtde. em estoque"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Url da Imagem</Form.Label>
          <Form.Control
            type="text"
            name="urlImagem"
            value={props.produtoSelecionado.urlImagem}
            onChange={manipularMudanca}
            placeholder="Insira a url da imagem do produto"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data de validade</Form.Label>
          <Form.Control
            type="date"
            name="dataValidade"
            value={props.produtoSelecionado.dataValidade}
            onChange={manipularMudanca}
            placeholder="Insira a validade do produto"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button
          type="button"
          variant="success"
          onClick={() => {
            props.setExibirTabela(true);
          }}
        >
          Voltar
        </Button>
      </Form>
    </Container>
  );
}
