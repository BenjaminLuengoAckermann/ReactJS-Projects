import "../css/ListaTareas.css"
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import { useState } from "react"

function ListaTareas() {

    // Hook
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            // Agreagamos la tarea al principio de la lista
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = id => {
        if (id) {
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
            setTareas(tareasActualizadas)
        }
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }
    
    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />)
                }
            </div>
        </>
    )
}

export default ListaTareas;