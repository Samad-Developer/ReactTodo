import React, { Component } from 'react'

export default class reset extends Component {
  constructor(props) {
    super(props);
  }
  resetTodoList = () => {
    this.props.reset();
  }
  render() {
    return (
      <button
        style={{ marginTop: '10px', display: 'block' }}
        className='btn btn-danger'
        onClick={this.resetTodoList}>Reset
      </button>
    )
  }
}
