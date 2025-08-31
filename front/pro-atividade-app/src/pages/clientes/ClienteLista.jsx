import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';

const clientes = [
  { 
    id: 1, 
    nome: 'Microsoft', 
    responsavel: 'Otto',
    contato: '(11) 99999-9999',
    situacao: 'Ativo'
  },
  { 
    id: 2, 
    nome: 'Google', 
    responsavel: 'Ana',
    contato: '(11) 88888-8888',
    situacao: 'Inativo'
  },
  { 
    id: 3, 
    nome: 'Facebook', 
    responsavel: 'Maria',
    contato: '(11) 77777-7777',
    situacao: 'Ativo'
  },
  { 
    id: 4, 
    nome: 'Amazon', 
    responsavel: 'João',
    contato: '(11) 66666-6666',
    situacao: 'Ativo'
  },
  { 
    id: 5, 
    nome: 'Apple', 
    responsavel: 'Pedro',
    contato: '(11) 55555-5555',
    situacao: 'Inativo'
  }
]   

export default function ClienteLista() {
  const history = useHistory();

  const [termoBusca, setTermoBusca] = useState(''); 
  
  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
  } 

  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente)
      .join(' ')
      .toLowerCase()
      .includes(termoBusca.toLowerCase());  
  });  

  const novoCliente = () => {
    history.push('/cliente/detalhe');
  }

  return (
    <>
        <TitlePage title='Cliente Lista'>
          <Button variant='outline-secondary' onClick={novoCliente}>
            <i className="fas fa-plus me-2"></i>
            Novo Cliente
          </Button>
        </TitlePage>
        <InputGroup className="mt-3 mb-3">
          <InputGroup.Text>Buscar</InputGroup.Text> 
          <FormControl
            onChange={handleInputChange}
            placeholder="Digite o nome do cliente"
            aria-label="Digite o nome do cliente" 
          />
        </InputGroup>

        <table className="table table-striped table-hover">
          <thead className='table-dark mt-3'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsável</th>
              <th scope="col">Contato</th>
              <th scope="col">Situações</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.id}>
                <th scope="row">{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.responsavel}</td>
                <td>{cliente.contato}</td>
                <td>{cliente.situacao}</td>
                <td>
                  <div>
                    <button 
                      className='btn btn-sm btn-outline-primary me-2' 
                      onClick={() => 
                        history.push(
                          `/cliente/detalhe/${cliente.id}`
                          )}
                      >
                      <i className="fas fa-user-edit me-2"></i>
                      Editar
                    </button>
                    <button className='btn btn-sm btn-danger'>
                      <i className="fas fa-user-times me-2"></i>
                      Desativar
                    </button>
                  </div>
                </td>
              </tr>
              ))} 
          </tbody>
        </table>
    </>
  )
}
