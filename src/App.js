import React from 'react';
import ReactDOM from "react-dom";

const menialTasks = [
  {
    task: "Fetch Some Item",
    id: 101,
    endured: false
  },
  {
    task: "Discipline Underling",
    id: 102,
    endured: false
  },
  {
    task: "Watch Door",
    id: 103,
    endured: false
  },
  {
    task: "Watch Prisoner",
    id: 104,
    endured: false
  },
  {
    task: "Grovel",
    id: 105,
    endured: false
  },
  {
    task: "Take Lashings",
    id: 106,
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
      </div>
    );
  }
}

export default App;
