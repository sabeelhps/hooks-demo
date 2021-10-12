import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Todo = (props) => {
    return (
        <li>
            <input onChange={()=>props.toggleTodo(props.id)} type="checkbox" defaultChecked={props.completed} />
            <span style={{textDecoration:props.completed?'line-through':'none'}}>{props.task}</span>
            <span onClick={()=>props.removeTodo(props.id)} className="delete-button"><FaTrashAlt/></span>
        </li>
    )
}

export default Todo
