import React, { Component } from 'react';
import Notes from './components/Notes'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
// .vue 三部分 template js style 
// react .js 组建类 继承 模板 用jsx语法 render
class App extends Component {
  render() {
    return (

    < Notes />
    );
  }
}

export default App;
