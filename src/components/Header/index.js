import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/Aula">DAW II</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Personagem" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cadastro-personagem"
              >
                Cadastro de Personagem
              </NavDropdown.Item>
              <NavDropdown.Item href="/listagem-personagem">
                Lista Personagens
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuário" id="basic-nav-dropdown">
              <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
