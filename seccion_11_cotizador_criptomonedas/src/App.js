import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./componentes/Formulario";
import Cotizacion from "./componentes/Cotizacion";
import Spinner from "./componentes/Spinner";
import axios from "axios";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  const [monedanew, setmonedanew] = useState("");
  const [criptomoneda, setcriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});

  //state para el spinner
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //evitamos la ejecucion de la primera vez
      if (monedanew === "") return;
      //consultar API para obtener cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${monedanew}`;

      const resultado = await axios.get(url);
      //mostrar el  spinner
      setCargando(true);
      setTimeout(() => {
        //cambiar el estado de cargando
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][monedanew]);
      }, 3000);
    };
    cotizarCriptomoneda();
  }, [monedanew, criptomoneda]);
  //mostrar spinner o resultado
  const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setmonedanew={setmonedanew}
          setcriptomoneda={setcriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
