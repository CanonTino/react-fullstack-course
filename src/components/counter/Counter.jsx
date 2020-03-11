import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this); //we do not need to bind anymore when we use arrow functions for render method and increment method
    this.reset = this.reset.bind(this);
  }

  render() {
    /*pay attention to the method reference passing through the incrementMethod attribute*/
    return (
      <div className="counter">
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <CounterButton by={-5} incrementMethod={this.increment} />

        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  increment(by) {
    //update state ->  counter++
    this.setState(prevState => {
      return { counter: prevState.counter + by };
    });
  }

  //we do not neeed the previous state here
  reset() {
    this.setState({
      counter: 0
    });
  }
}

export default Counter;
