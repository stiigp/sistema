import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';

export default function FormularioClientes(props) {
    return (
        <Container>
            <Form noValidate>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Código:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="0"
                                    id="codigo"
                                    name="codigo"
                                    disabled />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Informe a descrição da categoria"
                                    id="descricao"
                                    name="descricao"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button type="button" variant="success" onClick={() => {
                        props.setExibirTabela(true);
                    }}>
                        Voltar
                    </Button>
                </Row>
            </Form>
        </Container>
    );
}