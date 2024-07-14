import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncrement = this.handelIncrement.bind(this);
  }

  handelDecrement() {
    this.setState((currState) => {
      console.log(currState);
      return {
        count: --currState.count,
      };
    });
  }

  handelIncrement() {
    this.setState((currState) => {
      return {
        count: ++currState.count,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handelDecrement}>-</button>
        <div>{this.state.count}</div>
        <button onClick={this.handelIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
