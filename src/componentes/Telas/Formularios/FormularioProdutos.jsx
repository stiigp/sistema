import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';

export default function FormularioProdutos(props) {

    const produtoReseta = {
        codigo: 0,
        descricao: "",
        precoCusto: 0, 
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dataValidade: ""
    }

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeProdutos([...props.listaDeProdutos, props.produtoSelecionado]);
                //exibir tabela com o produto incluido
                window.alert("Produto inserido com sucesso!");
                props.setExibirTabela(true);
                //cadastrar o produto
            }
            else {
                props.setListaDeProdutos(props.listaDeProdutos.map((item) =>
                    item.codigo === props.produtoSelecionado.codigo ? props.produtoSelecionado : item
                ));
                window.alert("Produto atualizado com sucesso!");
                props.setProdutoSelecionado(produtoReseta);
                props.setModoEdicao(false);
                props.setExibirTabela(true);
            }
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        props.setProdutoSelecionado({ ...props.produtoSelecionado, [elemento]: valor });
    }

    return (
        <Container>
            <Form onSubmit={manipularSubmissao}>
                <Form.Group className="mb-3">
                    <Form.Label>Código</Form.Label>
                    <Form.Control disabled={props.modoEdicao} nome="codigo" type="text" placeholder="Insira o código do produto" value={props.produtoSelecionado.codigo} onChange={manipularMudanca} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preço de custo</Form.Label>
                    <Form.Control type="text" name="precoCusto" value={props.produtoSelecionado.precoCusto} onChange={manipularMudanca} placeholder="Insira o preço de custo" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preço de venda</Form.Label>
                    <Form.Control type="text" name="precoVenda" value={props.produtoSelecionado.precoVenda} onChange={manipularMudanca} placeholder="Insira o preço de venda" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" name="descricao" value={props.produtoSelecionado.descricao} onChange={manipularMudanca} placeholder="Insira a descrição do produto" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Qtd. do Estoque</Form.Label>
                    <Form.Control type="text" name="qtdEstoque" value={props.produtoSelecionado.qtdEstoque} onChange={manipularMudanca} placeholder="Insira a qtde. em estoque" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Url da Imagem</Form.Label>
                    <Form.Control type="text" name="urlImagem" value={props.produtoSelecionado.urlImagem} onChange={manipularMudanca} placeholder="Insira a url da imagem do produto" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Button type="button" variant="success" onClick={() => {
                    props.setExibirTabela(true);
                }}>
                    Voltar
                </Button>
            </Form>
        </Container>
    )
}