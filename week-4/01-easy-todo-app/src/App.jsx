import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

// function useTodos(){

//   return todos 
// }
function App() {
  const [todos, setTodos] = useState([])
    // fetch all todos from server

  // GET: fetch all todos for every 1sec and display
  useEffect(()=>{
    setInterval(() => {
      axios.get("http://localhost:3000/todos").then(resp=>setTodos(resp.data));
    }, 1000);
  }, [])

  // POST: add todos to the backend
  function sendTodo(){
    const description = document.getElementById("Description").value;
    const title = document.getElementById("Title").value;

    axios.post("http://localhost:3000/todos", {
      "title":title,
      "description":description
    }).then(resp=>console.log([resp.data])).catch(err=> console.log(err));
  }

  // DELETE: delete a todo by id
  function deleteTodo(id){
    axios.delete('http://localhost:3000/todos/'+id).then(resp=> console.log(resp));
  }

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <span>Title</span>
        <input type="text" id='Title' style={{marginLeft:'4rem'}}/>
        <br />
        <span>Description</span>
        <input type="text" id='Description' style={{margin:'1rem'}} />
        <br />
        <button type='button' onClick={sendTodo} style={{margin:'1rem'}}>Send Todo</button>
        <br />
        {todos.map((ele)=>{
          return <Todo title={ele.title} description={ele.description} id={ele.id} func={deleteTodo}></Todo>
        })}
        <br />
        
      </div>
    </>
  )
}

function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    return <div>
        {props.title }
        {props.description }
        {props.id }
        <button type='button' onClick={()=>props.func(props.id)}>Delete</button>
    </div>
}

export default App
