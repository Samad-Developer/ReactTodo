import React, { Component } from 'react'

export default class
    extends Component {
        constructor(props) {
            super(props);
        }
    complete = () => {
        this.props.complete();
    }
    incomplete = () => {
        this.props.incomplete();
    }
    alltasks = () => {
        this.props.all();
    }
    render() {
       const buttonStyle = {
            marginLeft: '5px'
        }

        return (
            <div >
                <button  onClick={this.alltasks}  className="btn btn-primary " data-toggle="button" aria-pressed="false"  style={buttonStyle}>
                    All ({this.props.showCount})
                </button>
                <button onClick={this.complete}  className="btn btn-primary " data-toggle="button" aria-pressed="false" style={buttonStyle}>
                    Completed ({this.props.showCompleted})
                </button>
                <button onClick={this.incomplete}  className="btn btn-primary " data-toggle="button" aria-pressed="false" style={buttonStyle}>
                    Incomplete ({this.props.showIncomplete})
                </button>
            </div>
        )
    }
}
