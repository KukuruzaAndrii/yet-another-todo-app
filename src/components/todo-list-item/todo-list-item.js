import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faExclamation } from '@fortawesome/free-solid-svg-icons'
import './todo-list-item.css'

const TodoListItem = ({ text, done, important, toggleDone, toggleImportant, deleteItem }) => {
  const classNames = `todo-list-item${important ? ' important' : ''}${done ? ' done' : ''}`

  return (
    <div className={classNames}>
      <span
        className='todo-text text-truncate'
        onClick={toggleDone}
      >{text}
      </span>
      <span className='d-flex'>
        <button
          onClick={deleteItem}
          type='button'
          className='btn btn-outline-danger'
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          onClick={toggleImportant}
          type='button'
          className='btn btn-outline-info'
        >
          <FontAwesomeIcon icon={faExclamation} />
        </button>
      </span>
    </div>
  )
}

export default TodoListItem
