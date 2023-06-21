/* eslint-disable jsx-a11y/alt-text */
import React from "react"; // No hace falta esta linea a partir de 2020
import '../css/Testimonio.css';

// Componente de Clase
class Testimonio extends React.Component {

  render() {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio"
        src={require(`../imgs/testimonio-${this.props.imagen}.jpg`)}
        alt={`Foto de ${this.props.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <h3 className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> en {this.props.pais}</h3>
          <p className="cargo-testimonio">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="texto-testimonio">{this.props.testimonio}</p>
        </div>

      </div>
    )
  };
}

export default Testimonio;