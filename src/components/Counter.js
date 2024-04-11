import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:0,
            show:true
        }
    }

    increment = () => {
        this.setState({value: this.state.value + 1})
    }

    decrement = () => {
        this.setState({value: this.state.value - 1})
    }
    toggleClick = () => {
        this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div>
        <button id='increment' type='button' onClick={this.increment}>+</button>
        <button id='decrement' type='button' onClick={this.decrement}>-</button>
        <button onClick={this.toggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        <ShowText show={this.state.show} value={this.state.value} />
      </div>
    )
  }
}

function ShowText(props){
    return props.show ? <h2 id='value'>{props.value}</h2> : <h2 id='value'>Sorry!</h2>
    // if(props.show){
    //     return <h2>{props.value}</h2>
    // } else {
    //     return null
    // }
}

export default Counter