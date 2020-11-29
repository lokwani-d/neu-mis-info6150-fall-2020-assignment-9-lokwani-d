import React from 'react';
import './TodoItem.scss';
import { FcCheckmark , FcUndo, FcExpand, FcCollapse, FcDeleteRow} from "react-icons/fc";
import ExpandTodo from './ExpandTodo'

// This class is my component which holds all my todo-items ad process the each todo-item for rendering
class TodoItem extends React.Component{

    state={
        isExpanded : false,
    }
// This will togle the expanded view of the to-do
    toggle = () => this.setState(
        { isExpanded: !this.state.isExpanded }
    )

    render() {
        const {id, title}= this.props.todo;

        // It renders a titiel and three task buttons
    return (
    <div className="ItemContainer">
        <div  className={this.props.todo.completed ? 'text-strike' : null}
               id= {this.state.isExpanded ? "Selected": "null" }
               > 
            {''} {title}
            <button onClick={this.props.delTodo.bind(this, id)} 
                className="del" title="Delete">
                <FcDeleteRow/>
            </button> 
            
            <button onClick={this.props.markComplete.bind(this, id)} 
                className="complete" 
                title={this.props.todo.completed? "Mark Pending": "Mark Done"}>
                {this.props.todo.completed?<FcUndo />:<FcCheckmark />}
            </button>
            
            <button onClick={this.toggle} 
                className="expand" 
                title={this.state.isExpanded ? "Hide": "View" }>
                {this.state.isExpanded ?  <FcCollapse /> : <FcExpand/>}
            </button>

            {this.state.isExpanded && <ExpandTodo todo = {this.props.todo} />}
        </div>
    </div>
    )
  }
}

export default TodoItem
