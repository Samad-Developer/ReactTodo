import React, { Component } from 'react'
import Add from './Add';
import List from './List';
import Reset from './Reset';
import Filters from './Filters';
import Image from './empty.jpg';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskControl: []
        }
    }

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

    }
    
    componentDidMount(){
        this.setState({
            tasks : JSON.parse( localStorage.getItem('tasks'))
        })
    }


    addTask = (taskName) => {
        let status = "incomplete";
        let exist = false;
        this.state.taskControl.filter(task => task.taskName.toLowerCase() === taskName.toLowerCase() ? exist = true : exist = false);
        if (exist) {
            alert("Todo already exists")
        } else {
            this.setState({
                tasks: [...this.state.tasks, { taskName, status }],
                taskControl: [...this.state.taskControl, { taskName, status }]
            })
        }
        
    }

    deleteTask = (taskName) => {
        let newTasks = this.state.tasks.filter(task => task.taskName !== taskName);
        let newTaskControl = this.state.taskControl.filter(task => task.taskName !== taskName);
        this.setState({
            tasks: newTasks,
            taskControl: newTaskControl
        })
    }

    handletaskCompletion = (taskName) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.taskName === taskName) {
                  task.status === "Completed" ? task.status = "Incomplete" : task.status = "Completed";   
                } 
                return task;
            }),
            taskControl: this.state.taskControl.filter(task => task.taskName !== taskName)
        })
    }

    resetTodo = () => {
        this.setState({
            taskControl: [],
            tasks: []
        })
    }
    filterComplete = () => {
        this.setState({
            taskControl: this.state.tasks.filter(task => task.status.toLowerCase() === "completed")
        })
    }
    filterInomplete = () => {
        this.setState({
            taskControl: this.state.tasks.filter(task => task.status.toLowerCase() === "incomplete")
        })
    }

    filterAll = () => {
        this.setState({
            taskControl: this.state.tasks
        })
    }
    searching = (taskname) => {

        this.setState({
            taskControl: this.state.tasks.filter(task => task.taskName.toLowerCase().match(taskname.toLowerCase()))
        })

    }
 
    render() {
        const outerstyle={
            display: 'flex', flexDirection: 'column', alignItems: 'center' 
         }
        return (
            <div>
                <div className="container" style={outerstyle}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1
                                style={{ color: '#457b9d', marginLeft: '100px' }}>TODO APP
                            </h1>
                            <Filters
                                complete={this.filterComplete}
                                incomplete={this.filterInomplete}
                                all={this.filterAll}
                                showCount={this.state.tasks.length}
                                showCompleted={this.state.tasks.filter(task => task.status.toLowerCase() === "completed").length}
                                showIncomplete={this.state.tasks.filter(task => task.status.toLowerCase() === "incomplete").length}
                            />
                            <hr></hr>
                            <Add entertask={this.addTask} search={this.searching} />
                            {
                                this.state.taskControl.length === 0 ?
                                    <img src={Image} alt="No Task" style={{ marginLeft: '100px', width: '250px', height: '200px', marginTop: '10px' }} /> :
                                    <List
                                        listoftasks={this.state.taskControl}
                                        completion={this.handletaskCompletion}
                                        delete={this.deleteTask} 
                                        />
                            }
                            <Reset reset={this.resetTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
