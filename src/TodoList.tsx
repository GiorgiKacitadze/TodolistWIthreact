import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Time from './Time';




interface item {
    id: number;
    text: string;
    completed: boolean;
    
}

export const TodoList: React.FC = () => {

   const [todo, settodo] = useState<item[]>([
    {id: 1, text: "First Item", completed: false },
    {id: 2, text: "Second Item", completed: false},
   ]) ;

   


   const [input, setinput]= useState<string>("") 
   

   const HendelClick = () => {
    if (input.trim() !== "") {
        const newTodo: item = { id: Date.now(), text: input, completed: false };
        settodo([...todo, newTodo]);
        setinput("");
      }
    
  };

   const HandleToggle = (id:number) =>{
        settodo(
            todo.map((todoitem)=>{
                if(todoitem.id === id){
                    return {...todoitem, completed: !todoitem.completed}
                    
                }
                return todoitem
            })
        )
   }

   const HendleDeleteItem = (DelItemId:number) => {
    
       
    const updatedItems = todo.filter((todo) => todo.id !== DelItemId);
    settodo(updatedItems);
      
    
    
   }

  return (
    <div className='main-container'>
        <div className='todoimg'>
            <Time/>
        </div>
     <ul>
        {todo.map((todoitem)=> {
          return (
            <div className='todoItem' key={todoitem.id}>
          <li  onClick={()=>{HandleToggle(todoitem.id)}} style={{textDecoration: todoitem.completed ? "line-through" : "none"}}>{todoitem.text}  </li>
          <p  onClick={() => {HendleDeleteItem(todoitem.id)}}><FontAwesomeIcon className='trashicon' icon={faTrash} /></p>
          
          </div>
          )
        })}
        </ul>
        <  input type="text" 

        placeholder={'Add To Do Item'}
        onChange={(e)=>{setinput(e.currentTarget.value)  } }
        
        value={input}
        />
        
        <div className='Btn-center'>
        <button onClick={HendelClick}>Add</button>
        </div>
     
    </div>
  )
}
