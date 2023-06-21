/* eslint-disable jsx-a11y/alt-text */
import React from "react"; // No hace falta esta linea a partir de 2020
import '../css/Testimonio.css';

function Testimonio(props){
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio"
        src={require(`../imgs/testimonio-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <h3 className="nombre-testimonio">
            <strong>{props.nombre}</strong> en {props.pais}</h3>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">{props.testimonio}</p>
        </div>

      </div>
    )
}

export default Testimonio;