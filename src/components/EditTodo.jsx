import React, { useState } from 'react'

export default function EditTodoForm({todo, editTodo}) {

  const [value, setValue] = useState(todo.todo)

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, todo.id);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-stone-100 rounded-xl shadow-lg max-w-sm mx-auto my-4 text-center flex justify-evenly p-2'>
        <input type="text" className='p-1 text-center ring-1 bg-stone-200 rounded-xl' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button className='bg-sky-500/50 ring-2 hover:bg-sky-700/50 p-2 rounded-xl'>update</button>
      </div>
    </form>
  )
}
