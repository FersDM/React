import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import PropTypes from "prop-types";
const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({ setcriptomoneda, setmonedanew }) => {
  //state del listado del criptomonedas
  const [listacripto, setlistacripto] = useState([]);

  //state para verificar el error
  const [error, setError] = useState(false);

  //arreglo de monedad
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "SOL", nombre: "Nuevo Sol" },
  ];

  //utilizar usemoneda
  const [moneda, SelectMoneda, setMoneda] = useMoneda(
    "Elige tu Moneda",
    "",
    MONEDAS
  );
  //usar usecriptomoneda
  const [criptomoneda, SelectCripmoneda] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listacripto
  );
  //Ejecutar llamado al API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setlistacripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  //cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    //validar si ambos campor estan llenos
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }
    //pasar los datos al componente principal
    setError(false);
    setmonedanew(moneda);
    setcriptomoneda(criptomoneda);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMoneda />
      <SelectCripmoneda />
      <Boton type="submit" value="calcular"></Boton>
    </form>
  );
};
Formulario.propTypes = {
  setcriptomoneda: PropTypes.func.isRequired,
  setmonedanew: PropTypes.func.isRequired,
};
export default Formulario;
