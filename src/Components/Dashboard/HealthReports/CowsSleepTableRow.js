import React, {Component} from 'react'
import * as Icon from 'react-feather'


class CowSleepTableRow extends Component{

  render(){
    return(
      <>
        <tr>
          <td>{this.props.cow.rfid}</td>
          <td>{this.props.cow.milk}</td>
          <td>{this.props.cow.sleep}</td>
          <td>Details <Icon.ArrowRightCircle size={15}/></td>
        </tr>
      </>
    )
  }
}

export default CowSleepTableRow