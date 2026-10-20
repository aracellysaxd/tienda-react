import { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RegistroView() {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    password: ''
  })
  const [mensaje, setMensaje] = useState('')

  function registrar(event) {
    event.preventDefault()
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
    
    usuarios.push({
      id: Date.now(),
      ...formulario,
      rol: 'cliente'
    })

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    setMensaje('Usuario registrado exitosamente')
    setTimeout(() => navigate('/login'), 1000)
  }

  return (
    <Container className="py-4" style={{ maxWidth: '500px' }}>
      <h1>Crear Cuenta</h1>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Form onSubmit={registrar}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            value={formulario.nombre}
            onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={formulario.email}
            onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={formulario.password}
            onChange={(e) => setFormulario({ ...formulario, password: e.target.value })}
            required
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Registrarme
        </Button>
      </Form>
    </Container>
  )
}

export default RegistroView