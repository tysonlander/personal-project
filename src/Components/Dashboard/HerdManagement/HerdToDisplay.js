import React, {Component} from 'react'
import './HerdToDisplay.css'

class HerdToDisplay extends Component {

  render(){
    return(
      <div className='herd-to-display-card'>
        <h4>{this.props.cow.rfid}</h4>
        <h4>{this.props.cow.breed}</h4>
        <h4>{this.props.cow.gender}</h4>
        <h4>{this.props.cow.location}</h4>
      </div>
    )
  }
}

export default HerdToDisplay