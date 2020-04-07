import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = ({todoData, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todoData.map(x => {
        const {id, ...item} = x;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...item}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};

export default TodoList;
