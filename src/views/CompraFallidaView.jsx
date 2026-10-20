import React from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CompraFallidaView() {
  return (
    <Container className="py-5 text-center">
      <Card className="p-4 mx-auto border-danger shadow-sm" style={{ maxWidth: '500px' }}>
        <h1 className="text-danger mb-3">No se pudo realizar el pago ❌</h1>
        <p className="lead">Hubo un problema al procesar tu transacción o la tarjeta fue rechazada.</p>
        <p className="text-muted">Por favor, verifica tus datos o intenta con otro medio de pago.</p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Button as={Link} to="/checkout" variant="warning">
            Reintentar Pago
          </Button>
          <Button as={Link} to="/" variant="outline-secondary">
            Ir al Inicio
          </Button>
        </div>
      </Card>
    </Container>
  )
}

export default CompraFallidaView