import React from 'react'
import firebase from 'firebase'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MainPage from './components/MainPage/MainPage'

import './styles/index.css'

// Initialize Firebase:
const config = {
  apiKey: "AIzaSyAsR4_-HsBPLml6GBzj_H2mMfB0V04P8Qs",
  authDomain: "colonial-messaging-service.firebaseapp.com",
  databaseURL: "https://colonial-messaging-service.firebaseio.com",
  storageBucket: "colonial-messaging-service.appspot.com",
  messagingSenderId: "213705155859"
}

firebase.initializeApp(config)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider><MainPage /></MuiThemeProvider>,
  document.getElementById('root')
)
