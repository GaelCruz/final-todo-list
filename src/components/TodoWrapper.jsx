import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react'
import uuid4 from "uuid4";
import Todo from './Todo';

export default function() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuid4(), todo: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  return (
    <div className='p-5'>
      <TodoForm addTodo={addTodo}/>
      <Todo />
    </div>
  )
}
