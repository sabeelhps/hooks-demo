import React from 'react'
import useInputState from './hooks/useInputState';

const TodoForm = (props) => {

    const [task, setTask, resetTask,isValid,setIsValid] = useInputState("");
   
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (task.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.addTodo(task);
        resetTask();
    }

    // const inputChangeHandler = (e) => {
    //     if (task.trim().length > 0) {
    //         setIsValid(true);
    //     }
    // }


    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label style={{color:!isValid?'red':'black'}} htmlFor="task">Todos</label>
                <input
                    style={{borderColor:!isValid?'red':'#ccc'}}
                    type="text"
                    onChange={setTask}
                    value={task}
                    placeholder="Add Todos"
                    id="task"
                />
            </form>
        </div>
    )
}

export default TodoForm
