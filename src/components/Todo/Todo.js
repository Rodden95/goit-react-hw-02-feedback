// import { Component } from "react/cjs/react.production.min";
import './Todo.css'
function Todo({todos, onDelete}){

    return <ul className="list">
      {todos.map(({id, plan})=>{
        return <li key={id} className="item">{plan}
          <button
            className="btn"
            onClick={() => onDelete(id)}
          >Х</button>
        </li>
      })}
           </ul>
  }

export default Todo;