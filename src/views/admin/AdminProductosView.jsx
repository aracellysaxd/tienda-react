import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminProductosView() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    cargarProductos()
  }, [])

  function cargarProductos() {
    const datos = JSON.parse(localStorage.getItem('productos') || '[]')
    setProductos(datos)
  }

  function eliminarProducto(id) {
    if (!window.confirm('¿Deseas eliminar este producto?')) return
    const nuevosProductos = productos.filter((p) => p.id !== id)
    localStorage.setItem('productos', JSON.stringify(nuevosProductos))
    setProductos(nuevosProductos)
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h1>Catálogo Administrador</h1>
        <Button as={Link} to="/admin/productos/nuevo">
          Agregar nuevo pastel
        </Button>
      </div>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ width: '60px', height: '40px', objectFit: 'cover' }}
                />
              </td>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toLocaleString('es-CL')}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default AdminProductosView