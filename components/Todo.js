import React, { Component, PropTypes } from 'react'


export default class Todo extends Component {
   render() {
      return (
         <div onClick={(e) => this.handleClick(e)} style={{padding:'10px',border:'1px solid'}}>
            {this.props.text}
         </div>
      )
   }
   handleClick(e)
   {
   	console.log(e.currentTarget.textContent)
   }
}