import React, { Component } from 'react'

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    }
  }
  

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value
    })
    // this.props.search(this.state.taskName);
  }
  enterTodo = (e) => {
    e.preventDefault();
    if (this.state.taskName == '') {
      alert('Please enter a task');
    } else {
      this.props.entertask(this.state.taskName);
    }
  }
  partialMatching = (e) => {
    e.preventDefault();
    this.props.search(this.state.taskName);
  }
  render() {
    const inputstyle = {
      width: '300px', marginTop: '10px', display: 'inline', height:'40px',
      
    }
    const searchbutton = {
      marginLeft: '5px', marginTop: '9px', display: 'inline'
    }
    return (
      <div>
        <form className='form-inline' >
          <input
            style={inputstyle}
            className="form-control"
            type="text"
            placeholder="Add a task"
            name='taskName'
            value={this.state.taskName}
            onChange={this.handleChange}
          />

          <button
            style={{ border:'1px solid green', marginTop: '9px', display: 'inline' ,height:'39px'}}
            className='btn btn-success'
            onClick={this.enterTodo}>Add
          </button>

          <button
            style={searchbutton}
            className='btn '
            onClick={this.partialMatching}>&#128270;
          </button>
        </form>
      </div>
    )
  }
}
