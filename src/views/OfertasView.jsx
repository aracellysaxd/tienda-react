import { useEffect, useState } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

function OfertasView({ alAgregarAlCarrito }) {
  const [ofertas, setOfertas] = useState([])

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productos') || '[]')
    const productosEnOferta = productos.filter((p) => p.enOferta === true)
    setOfertas(productosEnOferta)
  }, [])

  return (
    <Container className="py-4">
      <div className="d-flex align-items-center gap-2 mb-4">
        <h1>Ofertas Especiales</h1>
        <Badge bg="danger" className="fs-6">Descuentos de la semana</Badge>
      </div>
      <Row className="g-4">
        {ofertas.length > 0 ? (
          ofertas.map((producto) => (
            <Col md={6} lg={4} key={producto.id}>
              <ProductCard
                producto={producto}
                alAgregarAlCarrito={alAgregarAlCarrito}
              />
            </Col>
          ))
        ) : (
          <p>No hay tortas ni pasteles en oferta por hoy.</p>
        )}
      </Row>
    </Container>
  )
}

export default OfertasView