import React, { Component } from 'react'
import AppHeader from '../app-header'
import ItemStatusFilter from '../item-status-filter'
import SearchBar from '../seach-bar'
import TodoList from '../todo-list'
import AddItemForm from '../add-item-form'
import './app.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    const storageTodos = window.localStorage.getItem('todos')
    const storageCurrentID = window.localStorage.getItem('currentID')
    this.currentID = storageCurrentID === null ? 0 : Number(storageCurrentID)
    this.state = {
      todos: storageTodos === null
        ? [
          this.createTodoItem('Yet another todo app'),
          this.createTodoItem('Click or tap on todo to mark it done'),
          this.createTodoItem('Remove todo by click on trash icon')
        ] : JSON.parse(storageTodos),
      term: '',
      filter: 'all'
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    window.localStorage.setItem('currentID', String(this.currentID))
  }

  createTodoItem (text) {
    this.currentID += 1
    return ({
      text,
      id: this.currentID,
      done: false,
      important: false
    })
  }

  state = {
    todos: [
      this.createTodoItem('First'),
      this.createTodoItem('Second'),
      this.createTodoItem('Third')
    ],
    term: '',
    filter: 'all'
  }

  addItem = text => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todos }) => {
      return ({
        todos: [...todos, newItem]
      })
    })
  }

  deleteItem = deleteID =>
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== deleteID)
    }))

  toggleDone = toggleID =>
    this.setState(({ todos }) => ({
      todos: todos.map(t => t.id === toggleID ? { ...t, done: !t.done } : t)
    }))

  toggleImportant = importantID =>
    this.setState(({ todos }) => ({
      todos: todos.map(t => t.id === importantID ? { ...t, important: !t.important } : t)
    }))

  handleSearchChange = term => this.setState({ term })

  handleFilterChange = filter => this.setState({ filter })

  filterItems = (items, type) => {
    if (type === 'active') return items.filter(item => !item.done)
    if (type === 'done') return items.filter(item => item.done)
    return items
  }

  render () {
    const { todos, term, filter: filterType } = this.state
    const doneCount = todos.filter(t => t.done).length
    const todoCount = todos.length - doneCount
    const visibleItems = this.filterItems(todos, filterType).filter(({ text }) => text.toLowerCase().includes(term.toLowerCase()))
    return (
      <div className='app-container'>
        <AppHeader todo={todoCount} done={doneCount} />

        <div className='d-flex'>
          <SearchBar onSearchChange={this.handleSearchChange} />

          <ItemStatusFilter
            filter={filterType}
            onFilterChange={this.handleFilterChange}
          />
        </div>

        <AddItemForm addItem={this.addItem} />

        <TodoList
          todos={visibleItems}
          toggleDone={this.toggleDone}
          toggleImportant={this.toggleImportant}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}
