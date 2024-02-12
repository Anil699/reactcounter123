import  { Component } from 'react';
import './index.css'; // Importing the CSS file

class Counterapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

   

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Counter App</h2>
        <div className="counter">
          <button onClick={this.increment}>Increment</button>
          <span>{this.state.count}</span>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counterapp;
