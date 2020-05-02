import React from 'react'

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
]

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const classes = `btn btn-outline-primary${name === filter ? ' active' : ''}`
    return (
      <button
        className={classes}
        onClick={() => onFilterChange(name)}
        key={name}
        type='button'
      >{label}
      </button>
    )
  })
  return (
    <div className='btn-group my-2 mr-2'>
      {buttons}
    </div>
  )
}

export default ItemStatusFilter
