import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //citas en local storage
  let citasIniciales = JSON.parse(sessionStorage.getItem("arrCita"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [arrCita, setArrCita] = useState(citasIniciales);

  //use effect para realizar operacioens cuanddo el state cambia
  useEffect(() => {
    //citas en local storage
    let citasIniciales = JSON.parse(sessionStorage.getItem("arrCita"));
    
    if (citasIniciales) {
      sessionStorage.setItem("arrCita", JSON.stringify(arrCita));
    } else {
      sessionStorage.setItem("arrCita", JSON.stringify([]));
    }
  }, [arrCita]);
  //funciones que liste las citas
  const creararrCita = (cita) => {
    setArrCita([...arrCita, cita]);
  };

  //funcion que elimna una cita por su id
  const eliminarCita = (id) => {
    const nuevo_arr = arrCita.filter((cita) => cita.id !== id);
    setArrCita(nuevo_arr);
  };

  //mensaje condicional
  const titulo = arrCita.length === 0 ? "No hay citas" : "Adminitrar tus citas";
  return (
    <Fragment>
      <h1>Administrador de Paciente</h1>;
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario creararrCita={creararrCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}s</h2>
            {arrCita.map((c) => (
              <Cita key={c.id} arrCita={c} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
