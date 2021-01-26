import React, { Fragment } from 'react'

function Header(props) {
  const { titulo } = props
  return (
    <Fragment>
      <h1 className="encabezado"> {titulo}</h1>
    </Fragment>
  )
}
export default Header
