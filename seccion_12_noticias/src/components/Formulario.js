import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";
const Formulario = ({ setCategoria }) => {
  //opciones
  const OPCIONES = [
    { value: "example", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deporte" },
    { value: "technology", label: "Tecnologia" },
  ];
  //utilizar custom hook
  const [categoria, SelectNoticias] = useSelect("example", OPCIONES);

  //submit al formpara pasar categoria al app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    setCategoria(categoria);
  };
  return (
    <div className={styles.buscador}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <SelectNoticias />

          <div className="input-field col s12">
            <button
              type="submit"
              className={`${styles.btn_block} waves-effect waves-light btn-large`}
            >
              <i className="material-icons right">search</i> Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};
export default Formulario;
