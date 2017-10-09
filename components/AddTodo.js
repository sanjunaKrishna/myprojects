import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'

export default class AddTodo extends Component {
   render() {
      return (
         <div>
            <textarea style={{height:'400px',width:'400px'}} ref = 'input' />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
				
         </div>
      )
   }

   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
   }
}