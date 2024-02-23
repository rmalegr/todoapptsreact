type Tarea = {
    tarea:string
    borrarTarea():void
}

const Task = ({tarea, borrarTarea}: Tarea) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>X</button>
        </div>
    )
}

export default Task