// import React from "react"
// import './style.css'

// const Practise=({title,descript})=>{
// return(
    // <div className="first">
    // {/* <h1>{title}</h1> */}
    // {/* <p>{descript}</p> */}
    // {/* </div> */}
// )
// }
// export default Practise

// import React from "react"
// import './style.css'

import React, { useState } from 'react';
import './style.css'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Practise = () =>{
    const [todoList,setToDoList] =useState([{id:Date.now(), title:"Go to the gym"},{id:"56677", title:"Go to the gym"}])


    function addTodo (todo){
        setToDoList([...todoList,todo])
    }
    function deleteTodo (todoId){
        setToDoList([...todoList].filter(todo=>todo.id !==todoId))
    }

    return (
        <div className='todo-container'>
            <div className='todo-card'>
                <h1 className='heading'>MY TODO LIST</h1>
                <TodoHeader addTodo={addTodo}/>
                <TodoList todoList={todoList} deleteTodo={deleteTodo}/>

            </div>
   
        </div>
    );
};
export default Practise;











