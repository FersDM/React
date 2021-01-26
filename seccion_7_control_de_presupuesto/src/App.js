import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";
function App() {
  //definir el State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  //alamacena el arr de gastos
  const [gastos, setGastos] = useState([]);

  //alamacena el obj de gasto
  const [gasto, setGasto] = useState({});

  const [creargasto, setCreargasto] = useState(false);

  //UseEfect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //reserear al false
      setCreargasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCreargasto={setCreargasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
