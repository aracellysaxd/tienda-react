import { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function DetalleProductoView() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productos') || '[]')
    const encontrado = productos.find((item) => item.id === Number(id))
    setProducto(encontrado)
  }, [id])

  if (!producto) {
    return (
      <Container className="py-4">
        <h2>Producto no encontrado</h2>
        <Button as={Link} to="/">
          Volver al catálogo
        </Button>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <Card className="shadow-sm mx-auto" style={{ maxWidth: '700px' }}>
        <Card.Img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title as="h1">{producto.nombre}</Card.Title>
          <Card.Text>
            <strong>Categoría:</strong> {producto.categoria}
          </Card.Text>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text className="fs-3 fw-bold text-primary">
            ${producto.precio.toLocaleString('es-CL')}
          </Card.Text>
          <Button as={Link} to="/" variant="secondary">
            Volver
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DetalleProductoView