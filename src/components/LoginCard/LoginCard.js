import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import './LoginCard.css'

class LoginCard extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
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
    this.props.setName(this.state.name)
  }

  render() {
    return (
      <Paper className="LoginCard">
        <h1>Who Art Thou?</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="name"
            value={this.state.name}
            onChange={this.handleTextChange}
            floatingLabelText="Name" />
          <br />
          <FlatButton
            style={{'marginTop': '20px'}}
            onTouchTap={(e) => { e.preventDefault(); this.props.setName(this.state.name) }}
            secondary={true}
            label="Enter" />
        </form>
      </Paper>
    )
  }
}

LoginCard.propTypes = {
  setName: React.PropTypes.func.isRequired
}

export default LoginCard
