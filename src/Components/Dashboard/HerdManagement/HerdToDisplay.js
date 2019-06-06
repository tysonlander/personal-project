import React, {Component} from 'react'

class HerdToDisplay extends Component {

  render(){
    return(
      <div>
        <h4>{this.props.cow.rfid}</h4>
        <h4>{this.props.cow.rfid}</h4>
        <h4>{this.props.cow.rfid}</h4>

      </div>
    )
  }
}

export default HerdToDisplay