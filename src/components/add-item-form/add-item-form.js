import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class AddItemForm extends Component {
  state = {
    text: ''
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text === '') return
    this.props.addItem(this.state.text)
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <form
        className='add-item-container d-flex align-items-center'
        onSubmit={this.handleSubmit}
      >
        <button className='btn btn-outline-info mx-2'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <input
          value={this.state.text}
          className='form-control search-input mr-2'
          placeholder='Add what you need to be done'
          type='text'
          onChange={this.handleTextChange}
        />
      </form>
    )
  }
}
