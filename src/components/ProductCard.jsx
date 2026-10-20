import { Button, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({ producto, alAgregarAlCarrito }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fs-6 fw-bold">{producto.nombre}</Card.Title>
          {producto.enOferta && <Badge bg="danger">Oferta</Badge>}
        </div>
        <Card.Text className="text-muted small mb-2">
          {producto.categoria}
        </Card.Text>
        <Card.Text className="fw-bold fs-5 text-primary mt-auto">
          ${producto.precio ? producto.precio.toLocaleString('es-CL') : 0}
        </Card.Text>
        <div className="d-grid gap-2 mt-2">
          <Button
            as={Link}
            to={`/producto/${producto.id}`}
            variant="outline-primary"
            size="sm"
          >
            Ver detalle
          </Button>
          {alAgregarAlCarrito && (
            <Button
              variant="success"
              size="sm"
              onClick={() => alAgregarAlCarrito(producto)}
            >
              Agregar al Carrito
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard