import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
function App() {
  //state del formulario
  const [busqueda, setbusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const { ciudad, pais } = busqueda;
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const constultarAPI = async () => {
      if (consultar) {
        const appId = "65add5a5e71398330e4eb57aa441a67d";
        const url = ` https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);
        //detecta si hubo resultado correctos en la consulta
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    constultarAPI();
    //eslint-disable-next-line
  }, [consultar]);
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultado" />;
  } else {
    if (cargando) {
      componente = <Spinner />;
    }
    setTimeout(() => {
      setCargando(false);
    }, 5000);

    //verifica si el falso cargando , para mostrar el resultado
    if (!cargando) {
      componente = <Clima resultado={resultado} />;
    }
  }

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setbusqueda={setbusqueda}
                setConsultar={setConsultar}
                setCargando={setCargando}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
