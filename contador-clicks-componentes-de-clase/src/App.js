import './App.css';
import React from "react";
import Logo from "./imgs/TRUNKS.jpg";
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numClics: 0
    };
    /* Con esto podemos pasar los metodos a los componentes
    Enviamos el contexto a traves de bind (asociacion) */
    this.manejarClic = this.manejarClic.bind(this)
    this.reiniciarContador = this.reiniciarContador.bind(this)
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }))
  }

  reiniciarContador() {
    this.setState({ numClics: 0 })
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className="logo"
            src={Logo}
            alt="Logo" />
        </div>
        <div className='contenedor-principal'>
          <Contador
            numClics={this.state.numClics} />
          <Boton
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
