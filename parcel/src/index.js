import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                Counter
                </div>
        )
    }
}
const element = (
    <div>
        <h1>Hello, World!</h1>
        <Counter />
        <h2>It is { new Date().toLocaleTimeString()}.</h2>
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('root')
)


// 为什么只要用ReactDOM, 但是在写react时，第一行还是引用 import React,{ Component } from 'react'
