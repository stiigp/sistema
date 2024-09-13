import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Container, FloatingLabel, Row, Col } from 'react-bootstrap';

export default function Formulario(props) {
  const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };
  
  if (props.classe === "fornecedor") {
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
      </Form>
    )
  } else if (props.classe === "cliente") {
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
          <Form.Control type="number"/>
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
      </Form>
    )
  } else if (props.classe==="produto") {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control type="text" placeholder="Insira o código do produto" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço de custo</Form.Label>
          <Form.Control type="text" placeholder="Insira o preço de custo" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço de venda</Form.Label>
          <Form.Control type="text" placeholder="Insira o preço de venda" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="number" placeholder="Insira a descrição do produto"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Qtd. do Estoque</Form.Label>
          <Form.Control type="text" placeholder="Insira a qtde. em estoque" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Url da Imagem</Form.Label>
          <Form.Control type="text" placeholder="Insira a url da imagem do produto" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  } else if (props.classe === "categoria") {
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
            <Col md={6} offset={5}>
              <Button type="button" variant={"secondary"}>Voltar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}