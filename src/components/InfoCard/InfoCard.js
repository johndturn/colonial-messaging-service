import React from 'react'
import moment from 'moment'

import Paper from 'material-ui/Paper'

import './InfoCard.css'

const InfoCard = (props) => (
  <Paper className="InfoCard">
    <div className="InfoCard-name">
      <h3 className="InfoCard-titles">Thou art:</h3>
      <h3 className="InfoCard-text">{props.name}</h3>
    </div>
    <div className="InfoCard-time">
      <h3 className="InfoCard-titles">Thou didst begin sending messages at:</h3>
      <h3 className="InfoCard-text">{moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h3>
    </div>
  </Paper>
)

InfoCard.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default InfoCard
