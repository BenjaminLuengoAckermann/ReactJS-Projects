import './App.css';
import Logo from "./imgs/TRUNKS.jpg";
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App">
       <div className="contenedor-logo">
        <img
          src={Logo}
          className='logo'
          alt="Logo de la App"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
