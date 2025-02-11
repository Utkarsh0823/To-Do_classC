if (updatedText !== null && updatedText.trim() !== '') {
  
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    )}