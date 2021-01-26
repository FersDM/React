import React from "react";
import Gastos from "./Gastos";
import PropTypes from "prop-types";
const Listado = ({ gastos, eliminarGasto }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((g) => (
        <Gastos key={g.id} gasto={g} />
      ))}
    </div>
  );
};
Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};
export default Listado;
