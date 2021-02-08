import React, { useState } from "react";
const useSelect = (stateinicial, opciones) => {
  const [state, setState] = useState(stateinicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      <option>--Seleccione--</option>
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
