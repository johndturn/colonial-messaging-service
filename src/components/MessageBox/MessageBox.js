import moment from 'moment'
import firebase from 'firebase'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import './MessageBox.css'

class MessageBox extends Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }

    this.ref = firebase.database().ref().child('Message')
    this.updateMessages = this.updateMessages.bind(this)
  }

  componentDidMount() {
    this.ref.on('value', this.updateMessages)
  }

  componentWillUnmount() {
    this.ref.off('value', this.updateMessages)
  }

  updateMessages(snapshot) {
    let messages = []
    const messagesObj = snapshot.val()
    for (let key in messagesObj) {
      if (messagesObj.hasOwnProperty(key)) {
        messages.push(messagesObj[key])
      }
    }

    messages = messages.sort((a, b) => a.sentTime < b.sentTime ? -1 : 1)

    this.setState({ messages })
  }

  render() {
    return (
      <Paper className="MessageBox">
        <h2>Correspondence</h2>
        <div className="MessageBox-messages">
          <ul>
            {this.state.messages.map((message, i) => (
              <li key={i}>
                <em>{moment(message.sentTime).format('M/d/YYYY h:m A')}&nbsp;&nbsp;&nbsp;&nbsp;</em>
                <b>{message.sender}: </b>{message.message}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    )
  }
}

export default MessageBox
