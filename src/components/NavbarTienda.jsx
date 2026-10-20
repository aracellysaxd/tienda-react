import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

function NavbarTienda({ totalCarrito = 0 }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          🧁 Pastelería Dulce Hogar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ofertas">
              Ofertas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/productos">
              Administración
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center gap-2">
            <Button as={Link} to="/checkout" variant="success" className="me-2">
              🛒 Carrito (${totalCarrito.toLocaleString('es-CL')})
            </Button>
            <Nav.Link as={NavLink} to="/login">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registro">
              Crear Cuenta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTienda