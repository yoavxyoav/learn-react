import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    console.log('event handler called', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters }) // code was simplified form this.setState({ counters : counters}) because key : value are the same!
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          < Counter
            key={counter.id} // used internally by React
            onDelete={this.handleDelete}
            //value={counter.value}
            //id={counter.id}
            // the next line simplifies the previous two lines by just getting the entire component
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
