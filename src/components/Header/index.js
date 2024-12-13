import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "@/styles/styles.module.css"
export default function Header() {
  return (
    <Navbar bg="danger" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="DungeonBlitzLogoFull_400x400.png" className={styles.foto}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" bg="light" >
            <NavDropdown title="Personagem" id="basic-nav-dropdown" data-bs-theme="light">
              <NavDropdown.Item href="/cadastro-per" bg="light"
              >
                Cadastro de Personagem
              </NavDropdown.Item>
              <NavDropdown.Item href="/listagem-per">
                Lista Personagens
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Atributo" id="basic-nav-dropdown" data-bs-theme="light">
              <NavDropdown.Item href="/cadastro-atr"
              >
                Cadastro de Atributo
              </NavDropdown.Item>
              <NavDropdown.Item href="/listagem-atr">
                Lista de Atributos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Usuário" id="basic-nav-dropdown" data-bs-theme="light">
              <NavDropdown.Item href="/cadastro-usu">Cadastro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
