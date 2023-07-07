import React from 'react'

export default function Todo() {
  return (
    <div className='bg-stone-100 rounded-xl shadow-lg max-w-sm mx-auto my-4 text-center fl'>
      <p>Go out</p>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}
