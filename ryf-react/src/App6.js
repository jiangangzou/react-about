import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';




class App extends Component {
  state= {
    value: 'hello'
  }
handleChange (event) {
    this.setState({
      value: event.target.value
    });
}
  render() {
   const value = this.state.value

    return (
      <div className="App">
        <div>
          <input type="text" value={value} onChange={() => this.handleChange.bind(this)}/>
          <p>{value}</p>
        </div>
      </div>
    )
  }
}

export default App;
