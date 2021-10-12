import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");

    const [todos, setTodos] = useState(initialTodos);


    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);


    const addTodo = (todoText) => {
        setTodos((prevState) => {
            return [...prevState, { id: uuid(), task: todoText, completed: false }];
        })
    }

    const removeTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== id);
        })
    }

    const toggleTodo = (id) => {
      
        setTodos((prevState) => {

            return prevState.map((todo) => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
            });
        })
    }


    return (
        <div>
            <TodoForm
                addTodo={addTodo}
            />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    )
}

export default TodoApp
