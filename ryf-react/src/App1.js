import React, { Component } from 'react';
import './App.css';

class HelloMessage extends Component {
  render() {
    return <h1>Hello {this.props.name} </h1>
  }
}

class App extends Component {
  render() {
    // const names = ['Alice' ,'Emily','凯撒']
    const arr = [
      <h1 key="1" >Hello Word</h1>,
      <h2 key="2">React</h2>
    ]
    return (
      <div className="App">
      <HelloMessage name="John" />
        <ul>{ 
        //   names.map((name,index)=>{
        //   return (
        //     <div key={index}>
        //         hello , {name}
        //     </div>
        //   )
        // })
        
          arr
        
        }</ul>
      </div>
    )
  }
}

export default App;
