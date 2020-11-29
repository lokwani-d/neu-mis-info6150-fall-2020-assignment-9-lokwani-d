import "./App.scss";
import React from "react";
import TodoItemContainer from "./todolist-container/todoitem-container/TodoItemContainer";
import AddTodo from './todoform-container/AddTodo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          const data = {
            completed: todo.completed,
            title: todo.title,
            description: todo.description,
            createdDate: todo.createdDate,
            dueDate: todo.dueDate,
            dueTime: todo.dueTime
          };
          // console.log(data);
          const url = "http://localhost:3005/todos/" + id;
          // console.log(url);
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    const url = "http://localhost:3005/todos/" +id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then(data=> {console.log(data);
      this.setState({todos:[...this.state.todos.filter
      (todo=> todo.id!==id)]})})
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  addTodo=(todo)=>{
    console.log(todo.title + todo.description + todo.dueTime);
    const data = {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      dueTime: todo.dueTime,
    };

    fetch('http://localhost:3005/todos/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((data) => {console.log(data);
      this.setState({todos:
    [...this.state.todos, data]});
      });
    console.log("added");
  }

  componentDidMount() {
    console.log("component did mount");
    let todoList = [];
    fetch("http://localhost:3005/todos")
      .then((response) => response.json())
      .then((data) => {
        todoList = data.map((todo, i) => {
          // todoList.push(todo);
          return todo;
        });

        this.setState({
          todos: todoList,
        });
      });
    // console.log(todoList);
  }

  render() {
    console.log("render ");
    const Todos = this.state.todos;
    return (
      <div className="tasksToolbar">
        <h3 className="tasksToolbar-title">MERN Stack Based To-do List Application</h3>
        <AddTodo addTodo={this.addTodo}/>
        <TodoItemContainer
          Todos={Todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
