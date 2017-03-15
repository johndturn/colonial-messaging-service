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
      name: 'John'
    }

    this.setName = this.setName.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderApplication = this.renderApplication.bind(this)
  }

  setName(name) {
    this.setState({
      name
    })
  }

  renderApplication() {
    return (
      <div className="MainPage-authenticated-content">
        <InfoCard name={this.state.name} />
        <MessageBox />
        <InputCard name={this.state.name} />
      </div>
    )
  }

  renderLogin() {
    return (
      <LoginCard setName={this.setName} />
    )
  }

  render() {
    return (
      <div className="MainPage">
        <TopBar />
        <div className="MainPage-main-content">
          { this.state.name ? this.renderApplication() : this.renderLogin() }
        </div>
      </div>
    )
  }
}

export default MainPage
