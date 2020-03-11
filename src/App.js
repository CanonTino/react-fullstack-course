import React, { Component } from "react";
// import FirstComponent from "./components/learning-examples/FirstComponent";
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import FourthComponent from "./components/learning-examples/FourthComponent";

// import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";
import "./App.css";
//class component
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

export default App;
