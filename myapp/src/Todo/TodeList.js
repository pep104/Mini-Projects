import React from "react";
// import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
       listStyle: 'none'
    }
}
function TodoList(props){
    return(
        <ul style={styles.ul} className="container">
            {props.todos.map((todo, index) => {
               return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}


export default TodoList