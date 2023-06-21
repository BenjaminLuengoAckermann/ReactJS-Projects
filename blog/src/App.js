import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Estos son los testimonios de los usuarios del Blog</h1>
        <Testimonio 
        nombre="Jorge D'Alessandro"
        pais="España"
        imagen="jorge"
        cargo="Periodista"
        empresa="La Marca"
        testimonio="El blog esta muy bueno, me gusta usar un medio de comunicación
         abierto donde pueda expresar libremente mis ideas." />
        <Testimonio 
        nombre="Emma Stone"
        pais="Estados Unidos"
        imagen="emma"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="El blog esta muy bueno, me gusta usar un medio de 
        comunicación abierto donde pueda expresar libremente mis ideas." />
      </div>
    </div>
  );
}

export default App;
