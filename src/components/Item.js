import React, { Component } from 'react'

export default class item extends Component {
  constructor(props) {
    super(props);
  }
  handleCompletion = () => {
    this.props.completion(this.props.taskName);
    

  }
  render() {
    const liststyle = {
      marginTop: '5px',
      textDecoration: this.props.status === "Completed" ? "line-through" : "none",
      color: this.props.status === "Completed" ? "lightgray" : "black",
      
      
      display:'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border:'2px solid gray'
    }
    return (
      <div>
        <li  
          className='list-group-item'
          style={liststyle} key={this.props.taskName}>
          {this.props.taskName}
          <div>
          <button
            style={{ borderRadius: '50px', float: 'right', marginLeft: '5px', color: 'white' }}
            className='btn btn-danger'
            onClick={() => this.props.delete(this.props.taskName)}>
            &#215;         
          </button>
          
          <button
            style={{ borderRadius: '50px', float: 'right', color: 'white' }}
            className='btn btn-success'
            onClick={this.handleCompletion}>&#10003;
          </button>         
          
          </div>
          
        </li>
        
      </div>
    )
  }
}
