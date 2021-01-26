import React from "react";
import PropTypes from "prop-types";
const Cita = ({ arrCita, eliminarCita }) => {
  const { id, mascota, fecha, hora, propietario, sintomas } = arrCita;
  return (
    <div className="cita">
      <p>
        Mascota:
        <span>{mascota}</span>
      </p>
      <p>
        Dueño:
        <span>{propietario}</span>
      </p>
      <p>
        Fecha:
        <span>{fecha}</span>
      </p>
      <p>
        Hora :<span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};
Cita.propTypes = {
  arrCita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
