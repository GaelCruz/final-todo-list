import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react'
import uuid4 from "uuid4";
import Todo from './Todo';
import EditTodoForm from './EditTodo';

export default function() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuid4(), todo: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }

  const editTodo = id => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTodoMaster = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, todo: task, isEditing: !todo.isEditing} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='p-5'>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm 
            todo={todo}
            key={index}
            editTodo={editTodoMaster}/>
        ) :
        <Todo
          todo={todo}
          key={index}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
