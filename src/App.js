import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editingTodoId: null, 
    };
  }

 
  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  
  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      const newTodoItem = {
        text: this.state.newTodo,
        id: Date.now(), 
      };
      this.setState({
        todos: [...this.state.todos, newTodoItem],
        newTodo: '', 
      });
    }
  };

  
  handleDeleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

 
  handleEditTodo = (id) => {
    const todoToEdit = this.state.todos.find((todo) => todo.id === id);
    const updateText = prompt('Edit the selected task',todoToEdit.text)

   

    this.setState({
      newTodo: todoToEdit.text, 
      editingTodoId: id,
    });
  };

  handleSaveEdit = () => {
    if (this.state.newTodo.trim() !== '') {
      const updatedTodos = this.state.todos.map((todo) =>
        todo.id === this.state.editingTodoId
          ? { ...todo, text: this.state.newTodo } 
          : todo
      );
      this.setState({
        todos: updatedTodos,
        newTodo: '', 
        editingTodoId: null, 
      });
    }
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        
     
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder="Enter a new task"
        />
        
        <button onClick={this.state.editingTodoId ? this.handleSaveEdit : this.handleAddTodo}>
          {this.state.editingTodoId ? 'Save Edit' : 'Add Todo'}
        </button>

 
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
         
              <button onClick={() => this.handleEditTodo(todo.id)}>Edit</button>
            
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
