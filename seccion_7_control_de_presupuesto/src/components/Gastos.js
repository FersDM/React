import React from "react";
import PropTypes from "prop-types";
const Gastos = ({ gasto }) => {
  const { nombre, cantidad } = gasto;
  return (
    <li className="gastos">
      <p>
        {nombre}
        <span className="gasto">{cantidad}</span>
      </p>
    </li>
  );
};
Gastos.propTypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gastos;
