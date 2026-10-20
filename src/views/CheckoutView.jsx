import React from 'react'
import { Container, Button, Table, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CheckoutView({ carrito = [], cambiarCantidad, eliminarDelCarrito, totalPagar = 0 }) {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Carrito de Compras y Pago 🛒</h1>

      {carrito.length === 0 ? (
        <div className="text-center py-5">
          <h3>Tu carrito está vacío 🧁</h3>
          <p>Explora nuestro catálogo para agregar deliciosas tortas y pasteles.</p>
          <Button as={Link} to="/" variant="primary">
            Ir al Catálogo
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          <Col md={8}>
            <div className="bg-white p-3 rounded border mb-4 shadow-sm">
              <h4>Resumen del Pedido</h4>
              <Table responsive hover className="align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '5px' }}
                          />
                          <span className="fw-bold">{item.nombre}</span>
                        </div>
                      </td>
                      <td>${item.precio.toLocaleString('es-CL')}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => cambiarCantidad(item.id, -1)}
                          >
                            -
                          </Button>
                          <span className="fw-bold px-2">{item.cantidad}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => cambiarCantidad(item.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="fw-bold">
                        ${(item.precio * item.cantidad).toLocaleString('es-CL')}
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => eliminarDelCarrito(item.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="bg-white p-3 rounded border shadow-sm">
              <h4>Datos de Envío / Despacho</h4>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Maria Perez" required />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="+56 9 1234 5678" required />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección de Entrega</Form.Label>
                  <Form.Control type="text" placeholder="Calle, número, comuna" required />
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col md={4}>
            <div className="bg-light p-3 rounded border shadow-sm">
              <h4>Total a Pagar</h4>
              <hr />
              <div className="d-flex justify-content-between my-3 fs-4 fw-bold">
                <span>Total:</span>
                <span className="text-primary">${totalPagar.toLocaleString('es-CL')}</span>
              </div>
              <Button variant="success" size="lg" className="w-100">
                Pagar Pedido
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default CheckoutView