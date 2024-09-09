import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
      <h1>bleh</h1>
    )
  }
  
}