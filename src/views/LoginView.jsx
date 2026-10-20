import { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginView() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function iniciarSesion(event) {
    event.preventDefault()
    setError('')

    if (!email.includes('@')) {
      setError('Ingresa un correo válido')
      return
    }

    if (password.length < 6) {      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    const esAdmin = email === 'admin@pasteleria.cl' && password === '123456'
    
    if (esAdmin) {
      sessionStorage.setItem(
        'usuarioSesion',
        JSON.stringify({ nombre: 'Admin Pastelero', email, rol: 'admin' })
      )
      navigate('/admin/productos')
    } else {
      sessionStorage.setItem(
        'usuarioSesion',
        JSON.stringify({ nombre: 'Cliente', email, rol: 'cliente' })
      )
      navigate('/')
    }
  }

  return (
    <Container className="py-4" style={{ maxWidth: '500px' }}>
      <h1>Iniciar Sesión</h1>
      <Alert variant="info" className="small">
        <strong>Admin de prueba:</strong> admin@pasteleria.cl / 123456
      </Alert>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={iniciarSesion}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  )
}

export default LoginView