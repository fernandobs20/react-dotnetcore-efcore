import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>
                        Ativy
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            activeClassName="active"
                            as={NavLink} 
                            to='/cliente/lista'>
                                Clientes
                        </Nav.Link>
                        <Nav.Link 
                            activeClassName="active"
                            as={NavLink} 
                            to='/atividade/lista'>
                                Atividades
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown 
                            align='end' 
                            title="Fernando" 
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.2">
                                    Perfil
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Configurações
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Sair
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
  )
}
