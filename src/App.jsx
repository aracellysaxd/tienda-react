import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarTienda from './components/NavbarTienda'
import TiendaView from './views/TiendaView'
import DetalleProductoView from './views/DetalleProductoView'
import LoginView from './views/LoginView'
import RegistroView from './views/RegistroView'
import CheckoutView from './views/CheckoutView'
import OfertasView from './views/OfertasView'
import AdminLayout from './views/admin/AdminLayout'
import AdminProductosView from './views/admin/AdminProductosView'
import AdminAgregarProductoView from './views/admin/AdminAgregarProductoView'
import { productosIniciales } from './data/productosIniciales'

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito_pasteleria')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    const productosGuardados = localStorage.getItem('productos')
    if (!productosGuardados) {
      localStorage.setItem('productos', JSON.stringify(productosIniciales))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito_pasteleria', JSON.stringify(carrito))
  }, [carrito])

  function agregarAlCarrito(producto) {
    const existe = carrito.find((item) => item.id === producto.id)
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      )
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  function cambiarCantidad(id, cambio) {
    setCarrito(
      carrito
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + cambio
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPagar = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <>
      <NavbarTienda totalCarrito={totalPagar} cantidadItems={totalCantidad} />
      <Routes>
        <Route
          path="/"
          element={<TiendaView alAgregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/producto/:id" element={<DetalleProductoView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/registro" element={<RegistroView />} />
        <Route
          path="/checkout"
          element={
            <CheckoutView
              carrito={carrito}
              cambiarCantidad={cambiarCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
              totalPagar={totalPagar}
            />
          }
        />
        <Route path="/ofertas" element={<OfertasView alAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="productos" element={<AdminProductosView />} />
          <Route path="productos/nuevo" element={<AdminAgregarProductoView />} />
        </Route>
      </Routes>
    </>
  )
}

export default App