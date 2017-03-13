import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from '../TopBar/TopBar'

import './MainPage.css'

class MainPage extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }

    this.setName = this.setName.bind(this)
  }

  setName(name) {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div className="MainPage">
        <MuiThemeProvider>
          <TopBar />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MainPage
