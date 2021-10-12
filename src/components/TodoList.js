import Todo from './Todo';

const TodoList = ({todos,removeTodo,toggleTodo}) => {


    return (
        <div>
            <ul>
                {
                    todos.map((todo,idx) => {
                        return <Todo
                            id={todo.id}
                            key={idx}
                            task={todo.task}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                   }) 
                }
            </ul>
        </div>
    )
}

export default TodoList
