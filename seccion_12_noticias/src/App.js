import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
function App() {
  //definir la categoria y noticias
  const [categoria, setCategoria] = useState("");
  const [noticias, setnoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?topic=${categoria}&lang=en&token=4d16fcc0209e3510dc51536031c864d4`;
      // const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5afb98b894dd4a18aaa000180e902671`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setnoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
