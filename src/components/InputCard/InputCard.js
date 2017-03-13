import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import ContentSend from 'material-ui/svg-icons/content/send'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import './InputCard.css'

class InputCard extends Component {
  constructor() {
    super()

    this.state = {
      newMessage: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    // TODO: Send new message!
    console.log('Send this message!')
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Paper className="InputCard">
        <form className="InputCard-form" onSubmit={this.handleSubmit}>
          <TextField
            name="newMessage"
            value={this.state.newMessage}
            onChange={this.handleTextChange}
            style={{'flex': '2 1 75%'}}
            floatingLabelText="New Electronic Message" />
          <FloatingActionButton
            mini={true}
            onTouchTap={this.handleSubmit}>
            <ContentSend />
          </FloatingActionButton>
        </form>
      </Paper>
    )
  }
}

export default InputCard
