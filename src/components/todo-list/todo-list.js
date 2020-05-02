import React from 'react'
import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, toggleDone, toggleImportant, deleteItem }) => {
  const elements = todos.map(({ id, ...itemProps }) => {
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...itemProps}
          toggleDone={() => toggleDone(id)}
          toggleImportant={() => toggleImportant(id)}
          deleteItem={() => deleteItem(id)}
        />
      </li>
    )
  })

  return (
    <ul className='list-group todo-list m-2'>
      {elements}
    </ul>
  )
}

export default TodoList
