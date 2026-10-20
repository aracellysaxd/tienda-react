import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

function TiendaView({ alAgregarAlCarrito }) {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('productos') || '[]')
    setProductos(datos)
  }, [])

  return (
    <Container className="py-4">
      <h1 className="mb-4">Catálogo de Pastelería</h1>
      <Row className="g-4">
        {productos.map((producto) => (
          <Col md={6} lg={4} key={producto.id}>
            <ProductCard
              producto={producto}
              alAgregarAlCarrito={alAgregarAlCarrito}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TiendaView