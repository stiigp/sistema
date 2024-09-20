import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function FormularioClientes(props) {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" placeholder="Insira seu código" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Insira seu nome" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Qtde de compras</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Insira seu cpf" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control type="text" placeholder="Insira seu endereço" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="text" placeholder="Insira seu telefone" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Insira seu email" />
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