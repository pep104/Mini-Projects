import React, { useContext } from "react";
import Context from "../context";
// import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc', 
        borderRadius: '4px', 
        marginBottom: '.5rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if(todo.completed){
        classes.push('done')
    }

    return(
            <li style={styles.li}>
                <span className={classes.join(' ')}>
                    <input type='checkbox' onChange={() => onChange(todo.id)} checked={todo.completed} />
                    <strong>{index + 1}</strong>
                    {todo.title}
                </span>
                <button onClick={() => removeTodo(todo.id)}>&times;</button>
                
            </li>
        )
}


export default TodoItem