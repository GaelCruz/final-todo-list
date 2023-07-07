import React, { useState } from 'react'

export default function TodoForm({addTodo}) {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className='p-3 max-w-sm mx-auto bg-white text-center rounded-xl shadow-lg'>
      <h1 className='mb-3 text-xl font-medium'>Get it Done!</h1>
      <div className='flex justify-evenly mb-3 '>
        <input type="text" className='p-1 text-center ring-1 bg-stone-200 rounded-xl' placeholder='create your todo' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button className='bg-sky-500/50 ring-2 hover:bg-sky-700/50 p-2 rounded-xl'>Add</button>
      </div>
    </form>
  )
}
