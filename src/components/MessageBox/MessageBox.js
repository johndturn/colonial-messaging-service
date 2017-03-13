import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import './MessageBox.css'

class MessageBox extends Component {
  constructor() {
    super()

    this.state = {
      messages: {}
    }
  }

  componentDidMount() {
    // TODO: Retrieve the messages!
  }

  render() {
    let messages = []

    for (let key in this.state.messages) {
      if (this.state.messages.hasOwnProperty(key)) {
        // Prepare messages
      }
    }

    messages = messages.sort((a, b) => a.sentTime > b.sentTime ? -1 : 1)

    return (
      <Paper className="MessageBox">
        <h2>Correspondence</h2>
        <div className="MessageBox-messages">
          <ul>
            <li>
              <em>12/1/2016 1:00 PM&nbsp;&nbsp;&nbsp;&nbsp;</em>
              <b>john: </b>Good morn to thee!
            </li>
          </ul>
        </div>
      </Paper>
    )
  }
}

export default MessageBox
