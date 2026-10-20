import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className="bg-dark text-white p-3 rounded mb-3">
      <h4>Administración</h4>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/admin/productos" className="text-white">
          Listar productos
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/productos/nuevo" className="text-white">
          Agregar producto
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default AdminSidebar