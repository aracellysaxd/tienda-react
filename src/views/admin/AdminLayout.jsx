import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar'

function AdminLayout() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3} lg={2}>
          <AdminSidebar />
        </Col>
        <Col md={9} lg={10}>
          <div className="bg-white p-4 rounded shadow-sm">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminLayout