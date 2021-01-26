import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCreargasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //cuando el usuario agrega un gatos
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (nombre.trim() === "" || isNaN(cantidad) || cantidad < 1) {
      setError(true);
      return;
    }
    setError(false);

    //construi el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    setGasto(gasto);
    setCreargasto(true);

    //resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar gastos aqui</h2>
      {error ? (
        <Error mensaje=" Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired,
};

export default Formulario;
