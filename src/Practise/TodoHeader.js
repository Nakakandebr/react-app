// import React from "react";
import React, { useRef } from "react";
import "./TodoHeader.css"

const TodoHeader =({addTodo})=>{
    const inputRef = useRef();
    function handleClick(){
        const todo ={
            id:Date.now(),
            title:inputRef.current.value
            
        }
        if(inputRef.current.value !== ""){
            addTodo(todo)
            inputRef.current.value =""
            return;
        }
        alert("to do field cannot be empty")
        
       
    }
    return(
        <div className="add-input">
            <div>
                <input 
                type="text" 
                className="input-field" 
                placeholder="Add new todo"
                ref = {inputRef}
                />
   
            </div>
            <button  onClick={handleClick} className="btn">Add Todo</button>

        </div>
    );
};
export default TodoHeader;