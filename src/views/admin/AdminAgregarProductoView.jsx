import { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminAgregarProductoView() {
  const navigate = useNavigate()
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    categoria: '',
    descripcion: '',
    imagen: ''
  })
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(e) {
    setProducto({ ...producto, [e.target.name]: e.target.value })
  }

  function guardarProducto(e) {
    e.preventDefault()
    const productos = JSON.parse(localStorage.getItem('productos') || '[]')
    const nuevoProducto = {
      id: Date.now(),
      ...producto,
      precio: Number(producto.precio),
      enOferta: false
    }
    productos.push(nuevoProducto)
    localStorage.setItem('productos', JSON.stringify(productos))
    setMensaje('Producto agregado con éxito')
    setTimeout(() => navigate('/admin/productos'), 800)
  }

  return (
    <>
      <h1>Agregar Nuevo Pastel / Torta</h1>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Form onSubmit={guardarProducto}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="nombre" value={producto.nombre} onChange={manejarCambio} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" name="precio" value={producto.precio} onChange={manejarCambio} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Control name="categoria" value={producto.categoria} onChange={manejarCambio} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" name="descripcion" value={producto.descripcion} onChange={manejarCambio} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL de Imagen</Form.Label>
          <Form.Control name="imagen" value={producto.imagen} onChange={manejarCambio} required />
        </Form.Group>
        <Button type="submit">Guardar Producto</Button>
      </Form>
    </>
  )
}

export default AdminAgregarProductoView