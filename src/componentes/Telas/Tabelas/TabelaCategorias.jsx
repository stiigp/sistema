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
                        <th>Descriçao</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeClientes?.map((cliente) => {
                                return (
                                    <tr>
                                        <td>{cliente.codigo}</td>
                                        <td>{cliente.descricao}</td>
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