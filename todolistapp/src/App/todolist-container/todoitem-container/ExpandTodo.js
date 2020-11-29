import React from 'react'
import './ExpandTodo.scss'

class ExpandTodo extends React.Component {
   
  
    render(){
        return (
            <div className="details">
                <li><strong>Task Created:</strong> {this.props.todo.createdDate}</li>
                <li><strong>Description:</strong> {this.props.todo.description}</li>
                <li><strong>Due Date:</strong> {this.props.todo.dueDate}</li>
                {/* <li><strong>Due Time: </strong>{this.props.todo.dueTime}</li> */}
                <li><strong>Completion Status:</strong> {this.props.todo.completed?"Completed": "In Progress"}</li>

            </div>
        )
    }
    
}

export default ExpandTodo
