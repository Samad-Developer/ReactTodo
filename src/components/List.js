import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr></hr>
        <ul className='list-group' >
          {
            this.props.listoftasks.map(task => {
              return <Item
                key={task.taskName}
                taskName={task.taskName}
                status={task.status}
                completion={this.props.completion}
                delete={this.props.delete}
                complete={this.props.complete}
                incomplete={this.props.incomplete}
              />
            })
          }
        </ul>
      </div>
    )
  }
}
