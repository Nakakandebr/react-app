import React from "react";
import "./TodoList.css"
const TodoList =({todoList,deleteTodo})=>{

    return(
        <div className="todo-list-container">
        {
            todoList.map(todo =><div  key={todo.id} className="todo-item">
                <p>{todo.title}</p>
                <p  onClick={()=>deleteTodo(todo.id)}  className="todo-del">Delete</p>
            </div>)
        }
        </div>
    );
};
export default TodoList;
