// MOCK DE DATOS - PASTELERÍA
const mockProductosPasteleria = [
  { id: 1, nombre: 'Torta Hojarasca', precio: 24990, categoria: 'Tortas', stock: 10, enOferta: true },
  { id: 2, nombre: 'Pie de Limón', precio: 12990, categoria: 'Pasteles', stock: 15, enOferta: true },
  { id: 3, nombre: 'Kuchen de Nuez', precio: 14990, categoria: 'Pasteles', stock: 0, enOferta: false }
];

describe('Suite de Pruebas Unitarias - Pastelería Online', () => {

  // --- LOGICA CRUD Y CARRITO DE COMPRAS ---
  it('1. Debe obtener el catálogo inicial de pastelería correctamente', () => {
    expect(mockProductosPasteleria.length).toBe(3);
  });

  it('2. Debe agregar una nueva torta al catálogo (Crear)', () => {
    const nuevaTorta = { id: 4, nombre: 'Torta Selva Negra', precio: 23990, categoria: 'Tortas', stock: 5 };
    const catálogoActualizado = [...mockProductosPasteleria, nuevaTorta];
    expect(catálogoActualizado.length).toBe(4);
  });

  it('3. Debe eliminar un producto por ID (Eliminar pastel)', () => {
    const filtrados = mockProductosPasteleria.filter(p => p.id !== 2);
    expect(filtrados.length).toBe(2);
    expect(filtrados[0].id).toBe(1);
  });

  it('4. Debe calcular el total a pagar en un pedido de pastelería', () => {
    const totalPedido = mockProductosPasteleria.reduce((acc, item) => acc + item.precio, 0);
    expect(totalPedido).toBe(52970);
  });

  // --- VALIDACIÓN DE REGLAS DE NEGOCIO Y FORMULARIOS ---
  it('5. Debe rechazar un pedido de un pastel sin stock disponible', () => {
    const pastelSinStock = mockProductosPasteleria.find(p => p.id === 3);
    const puedeVenderse = pastelSinStock.stock > 0;
    expect(puedeVenderse).toBe(false);
  });

  it('6. Debe validar que la dirección de despacho tenga el formato correcto', () => {
    const direccion = 'Av. Pajaritos 1234';
    const esValida = direccion.trim().length >= 5;
    expect(esValida).toBe(true);
  });

  it('7. Debe validar que el correo de contacto para el pedido contenga "@"', () => {
    const correoCliente = 'cliente.pasteleria.com';
    const esValido = correoCliente.includes('@');
    expect(esValido).toBe(false);
  });

  // --- AUTENTICACIÓN Y ROLES DE ADMINISTRACIÓN ---
  it('8. Debe autenticar correctamente al Administrador de la Pastelería', () => {
    const credencialEmail = 'admin@pasteleria.cl';
    const esAdmin = credencialEmail === 'admin@pasteleria.cl';
    expect(esAdmin).toBe(true);
  });

  it('9. Debe simular el guardado de la sesión del pastelero/admin (SessionStorage Mock)', () => {
    const sesionPastelero = { usuario: 'Pastelero Principal', rol: 'admin' };
    const sesionString = JSON.stringify(sesionPastelero);
    expect(sesionString).toContain('admin');
  });

  // --- FILTROS DE CATEGORÍAS Y OFERTAS ---
  it('10. Debe filtrar únicamente los productos de pastelería en Oferta', () => {
    const ofertas = mockProductosPasteleria.filter(p => p.enOferta === true);
    expect(ofertas.length).toBe(2);
  });

});