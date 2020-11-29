import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.scss'

// This component class adds my new todo by invoking a fetch post on the API
class AddTodo extends Component {
    
    state={
        title: '',
        description: '',
        dueDate: '',
        dueTime: '',
    }
   
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({title: '',
            description: '',
            dueDate: '',
            dueTime: '',})
    }
    
    onChange=(e)=> this.setState({[e.target.name]: e.target.value});
// This components renders a form for the user to fill in the details
    render() {
    
        return (
      
            <form onSubmit={this.onSubmit} className="flexBoxFix" >
                <input type="text" 
                name="title" 
                placeholder="Add Todo ..."
                value={this.state.title}
                onChange={this.onChange}
                className="title"
                required
                />

                <input type="text" 
                name="description" 
                placeholder="Add Description ..."
                value={this.state.description}
                onChange={this.onChange}
                className="title"
                />

                <input type="date" 
                name="dueDate" 
                value={this.state.dueDate}
                onChange={this.onChange}
                className="date"
                />

                {/* <input type="time" 
                name="dueTime" 
                value={this.state.dueTime}
                onChange={this.onChange}
                className="date"
                /> */}

                <input type="submit" 
                value="Submit"
                className="submitBtn"
                />  

            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired,
}
export default AddTodo
