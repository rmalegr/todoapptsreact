import React, {useState} from 'react';
import ListaTareas from "./ListaTareas";
import listaTareas from "./ListaTareas";

const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTarea, setListaTarea] = useState<string[]>([])
    const addNuevaTarea = () => {
        setListaTarea([...listaTarea, nuevaTarea])
        console.log(listaTarea)
    }
    const handleBorrarTarea = (index: number) => {

    }
    return (
        <div>
            <div>
                <h1>Lista de Tareas </h1>
                <input
                    type="text"
                    placeholder="Ingrese la nueva tarea"
                    value={nuevaTarea}
                    name="nuevaTarea"
                    onChange={(e) => {
                        setNuevaTarea(e.target.value)
                    }}

                />
                <button onClick={addNuevaTarea}>Agregar Tarea</button>


            </div>
            <ListaTareas listaTareas={listaTarea} borrarTarea={handleBorrarTarea}/>

        </div>

    )
}


export default TodoApp;