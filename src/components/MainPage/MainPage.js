import firebase from 'firebase'
import React, { Component } from 'react'

import TopBar from '../TopBar/TopBar'
import InfoCard from '../InfoCard/InfoCard'
import LoginCard from '../LoginCard/LoginCard'
import InputCard from '../InputCard/InputCard'
import MessageBox from '../MessageBox/MessageBox'

import './MainPage.css'

class MainPage extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        'name': '',
        'email': '',
        'uid': ''
      }
    }

    this.setUser = this.setUser.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderApplication = this.renderApplication.bind(this)
  }

  componentWillUnmount() {
    firebase.auth().signOut()
  }

  setUser(user) {
    this.setState({
      user
    })
  }

  renderApplication() {
    return (
      <div className="MainPage-authenticated-content">
        <InfoCard name={this.state.user.name} />
        <MessageBox />
        <InputCard name={this.state.user.name} />
      </div>
    )
  }

  renderLogin() {
    return (
      <LoginCard setUser={this.setUser} />
    )
  }

  render() {
    return (
      <div className="MainPage">
        <TopBar />
        <div className="MainPage-main-content">
          { this.state.user.name ? this.renderApplication() : this.renderLogin() }
        </div>
      </div>
    )
  }
}

export default MainPage
