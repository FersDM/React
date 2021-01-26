import React from 'react'
const Producto = ({ producto, carrito, setCarrito, productos }) => {
  const { id, nombre, precio } = producto

  //agregar producto al carrito
  const seleccionarProducto = id => {
    const obj = productos.filter(producto => producto.id === id)
    setCarrito([...carrito, ...obj])
  }

  //Eliminar producto del carito
  const eliminarProducto = id => {
    const productos = carrito.filter(p => p.id !== id)

    //colocar el producto en el state
    setCarrito(productos)
  }
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            eliminarProducto(id)
          }}>
          Eliminar
        </button>
      )}
    </div>
  )
}

export default Producto
