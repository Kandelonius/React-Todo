import React from 'react';
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const menialTasks = [
  {
    task: "Fetch Some Item",
    id: 505,
    endured: false
  },
  {
    task: "Discipline Underling",
    id: 530,
    endured: false
  },
  {
    task: "Watch Door",
    id: 545,
    endured: false
  },
  {
    task: "Watch Prisoner",
    id: 845,
    endured: false
  },
  {
    task: "Grovel",
    id: 1245,
    endured: false
  },
  {
    task: "Take Lashings",
    id: 1315,
    endured: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menialTasks // same as menialTasks:menialTasks
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList menialTasks={this.state.menialTasks} />
      </div>
    );
  }
}

export default App;
