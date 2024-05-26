import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevState => [...prevState, todo]);
  };
  const handleDelete = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };
  return (
    <>
      <Form onSubmit={handleSubmit} />

      {todos.length ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
