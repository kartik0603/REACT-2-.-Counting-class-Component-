import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={this.incrementCount}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "20px",
          }}
        >
          Increment
        </button>
        <button
          onClick={this.decrement}
          style={{ padding: "10px 20px", fontSize: "20px" }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
