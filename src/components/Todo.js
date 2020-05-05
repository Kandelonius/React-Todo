import React from 'react';
//<Todo /> is a component that takes in the todo data and displays the task to the screen.
const Todo = props => {
    // console.log(props)
    return (
        <button style={props.item.endured ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleTask(props.item.id)}>
            <p>{props.item.task}</p>
        </button>
    );
}

export default Todo;