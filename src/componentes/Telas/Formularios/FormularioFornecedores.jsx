import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function FormularioFornecedores(props) {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Insira seu nome" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contato</Form.Label>
                <Form.Control type="text" placeholder="Insira seu contato" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" placeholder="Insira seu endereço" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Código de fornecedor</Form.Label>
                <Form.Control type="text" placeholder="Insira seu código" />
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
    )
}