import React from 'react'

export default function Todo({todo, toggleComplete, editTodo, deleteTodo}) {
  return (
    <div className='bg-stone-100 rounded-xl shadow-lg max-w-sm mx-auto my-4 text-center flex justify-evenly'>


      {/* <p onClick={toggleComplete(todo.id)} className={`'py-1 px-2 hover:cursor-pointer hover:bg-stone-400 my-2 bg-stone-300 rounded-xl' ${ todo. completed ? '': '' }` }>{todo.todo}</p> */}

      <p onClick={() => toggleComplete(todo.id)} className={`py-1 px-2 hover:cursor-pointer hover:bg-stone-400 my-2 bg-stone-300 rounded-xl ${todo.completed ? 'line-through text-stone-500/50' : ''}`} >{todo.todo}</p>


      <div className='space-x-4'>
        <button onClick={() => editTodo(todo.id)} className='bg-sky-200/50 ring-2 hover:bg-sky-300/50 p-1 rounded-xl my-2'>edit</button>
        <button onClick={() => deleteTodo(todo.id)} className='bg-red-200/50 ring-2 hover:bg-red-300/50 p-1 rounded-xl my-2'>delete</button>
      </div>
    </div>
  )
}
