import React from "react";
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  reset() {
    this.setState({ count: (this.state = 0) });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Counts: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <br />
        <button onClick={this.reset}>zero</button>
      </div>
    );
  }
}
export default ClassCounter;
