import React from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CompraExitosaView() {
  return (
    <Container className="py-5 text-center">
      <Card className="p-4 mx-auto border-success shadow-sm" style={{ maxWidth: '500px' }}>
        <h1 className="text-success mb-3">¡Pago Realizado con Éxito! 🎉</h1>
        <p className="lead">Tu pedido de pastelería ha sido confirmado y está en preparación.</p>
        <p className="text-muted">Enviamos un correo con el comprobante de compra y los detalles de entrega.</p>
        <Button as={Link} to="/" variant="success" className="mt-3">
          Volver al Catálogo
        </Button>
      </Card>
    </Container>
  )
}

export default CompraExitosaView