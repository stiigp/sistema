import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {
    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Contato</th>
                        <th>Endereço</th>
                        <th>Código de Fornecedor</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeFornecedores?.map((fornecedor) => {
                                return (
                                    <tr>
                                        <td>{fornecedor.nome}</td>
                                        <td>{fornecedor.contato}</td>
                                        <td>{fornecedor.endereco}</td>
                                        <td>{fornecedor.codFornecedor}</td>
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