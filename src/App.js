import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";  


class App extends Component {
  state = { 
    todos : [
       {id:1, content:'Buy some milk'}, 
       {id:2, content: 'Play cricket'}, 
       {id:3, content:'Read novels'}, 
    ]
   }; 

   handleDelete = (id) => {
     const todos = this.state.todos.filter(todo => todo.id !== id); 
     
     this.setState({
       todos, 
     })
   };

   addTodo = (todo) => {
     todo.id = Math.random(); 
     const todos = [todo, ...this.state.todos ]; 
     this.setState({
       todos, 
     })
   }

  render() { 
    return ( 
      <div>
        <div className="container">
        <h3 className="my-4 text-center">Hello Todos</h3>
        <div className="row">
          <div className="col-7">

           <Todos 
              deleteTodo={this.handleDelete} 
              todos={this.state.todos} 
           /> 
          </div>

          <div className="col-5">
             <AddTodo addTodo={this.addTodo} />
          </div>

         </div>
        </div>
      </div>
     );
  }
}
 
export default App;