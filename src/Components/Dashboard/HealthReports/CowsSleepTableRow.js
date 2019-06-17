import React, {Component} from 'react'

class CowSleepTableRow extends Component{

  render(){
    return(
      <>
        <tr>
          <td>{this.props.cow.rfid}</td>
          <td>{this.props.cow.milk}</td>
          <td>{this.props.cow.sleep}</td>
          <td>View</td>
        </tr>
      </>
    )
  }
}

export default CowSleepTableRow