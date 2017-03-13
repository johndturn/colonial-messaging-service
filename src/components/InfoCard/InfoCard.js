import moment from 'moment'
import React, { Component } from 'react'

import { Card } from 'material-ui/Card'

class NewComponent extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <Card>
        <div className="InfoCard-name"></div>
        <div className="InfoCard-time"></div>
        <div className="InfoCard-name"></div>
      </Card>
    )
  }
}

export default NewComponent
