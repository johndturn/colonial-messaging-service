import firebase from 'firebase'
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

    this.ref = firebase.database().ref().child('Message')

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.newMessage) {
      const newMessage = {
        sender: this.props.name,
        sentTime: new Date().getTime(),
        message: this.state.newMessage
      }

      this.setState({ newMessage: '' })

      const newKey = this.ref.push().key
      this.ref.child(newKey).set(newMessage)
    }
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
