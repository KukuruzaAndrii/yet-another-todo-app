import React from 'react'
import './app-header.css'

const AppHeader = ({ todo, done }) => {
  const subscription = <span>{todo} more to do, {done} done</span>
  return (
    <div className='header-container mx-2 mt-2'>
      <h1>Todo List</h1>
      {subscription}
    </div>
  )
}

export default AppHeader
