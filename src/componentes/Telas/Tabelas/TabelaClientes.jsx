import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {
    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Qtde de compras</th>
                        <th>CPF</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeClientes?.map((cliente) => {
                                return (
                                    <tr>
                                        <td>{cliente.codigo}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.qtdCompras}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.endereco}</td>
                                        <td>{cliente.telefone}</td>
                                        <td>{cliente.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </Container>
        </>
    )
}