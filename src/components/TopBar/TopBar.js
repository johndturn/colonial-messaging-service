import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'

const TopBar = () => (
  <AppBar
    title="Colonial Messaging Service"
    iconElementLeft={<IconButton><MailOutline /></IconButton>} />
)

export default TopBar
