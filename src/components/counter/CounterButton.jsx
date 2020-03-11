import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class CounterButton extends Component {
  render() {
    const _by = this.props.by;
    let button = (
      <button onClick={() => this.props.incrementMethod(this.props.by)}>
        {/*in order to pass a parameter to the function, we must invoke the function as an arrow function*/}
        {this.props.by}
      </button>
    );
    if (_by > 0)
      button = (
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
      );
    return <div className="counter">{button}</div>;
  }
}

CounterButton.defaultProps = {
  //establishes default values for props for those cases where programmer does not specify a prop value
  by: 1
};

CounterButton.propTypes = {
  //establishes the props value types constraints for each property
  by: PropTypes.number
};

export default CounterButton;
