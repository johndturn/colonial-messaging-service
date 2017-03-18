import firebase from 'firebase'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import './LoginCard.css'

class LoginCard extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: 'Please enter both an email and password!'
      })
    } else {
      this.setState({ error: '' })
      const email = this.state.email
      const password = this.state.password

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((fireUser) => {
        const uid = fireUser.uid
        firebase.database().ref().child('User').child(uid)
        .once('value').then((snapshot) => {
          if (snapshot && snapshot.val()) {
            const user = snapshot.val()
            this.props.setUser(user)
          } else {
            this.setState({
              error: 'No users node in the database!'
            })
          }
        }).catch((error) => {
          this.setState({
            error: error.message,
            password: ''
          })
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          password: ''
        })
      })
    }
  }

  render() {
    return (
      <Paper className="LoginCard">
        <h1>Who Art Thou?</h1>
        { this.state.error && <h4 className="error">{this.state.error}</h4> }
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="email"
            value={this.state.email}
            onChange={this.handleTextChange}
            floatingLabelText="Email" />
          <br />
          <TextField
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleTextChange}
            floatingLabelText="Password" />
          <br />
          <FlatButton
            style={{'marginTop': '20px'}}
            onTouchTap={this.handleSubmit}
            secondary={true}
            label="Enter" />
        </form>
      </Paper>
    )
  }
}

LoginCard.propTypes = {
  setUser: React.PropTypes.func.isRequired
}

export default LoginCard
