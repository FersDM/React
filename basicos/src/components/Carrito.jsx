import React from 'react'
import './carrito.css'
import Producto from './Producto'
const Carrito = ({ carrito, setCarrito }) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>No hay elementos</p>
    ) : (
      carrito.map(p => (
        <Producto
          key={p.id}
          producto={p}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))
    )}
  </div>
)

export default Carrito
