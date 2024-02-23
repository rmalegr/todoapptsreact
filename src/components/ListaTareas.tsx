import Task from "./Task";

type ListaTareasProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};
const ListaTareas = ({listaTareas, borrarTarea}: ListaTareasProps) => {
    return (
        <div className='taskList'>
            {listaTareas.map((tarea, index) => (
                <Task tarea={tarea} borrarTarea={() => borrarTarea}
                      key={index}/>))
            }
        </div>
    );
};

export default ListaTareas;