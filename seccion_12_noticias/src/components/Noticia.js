import React from "react";
import PropTypes from "prop-types";
const Noticia = ({ noticia }) => {
  //extraer los daots
  const { image, url, title, description, source } = noticia;

  const imagen = image ? (
    <div className="card-image">
      <img src={image} alt={title} />
      {/* <span className="card-title">{source.name}</span> */}
      <span className="card-title truncate">{title}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 s3">
      <div className="card">
        {imagen}

        <div className="card-content">
          {/* <h3>{title}</h3> */}
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="nooper noreferrer"
            // className="waves-effect waves-light btn"
          >
            Ver Noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};
Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};
export default Noticia;
