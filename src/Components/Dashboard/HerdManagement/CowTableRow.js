import React, {Component} from 'react'


class CowTableRow extends Component {

  render(){
    return(
      <div>
        <tr>
          <td>{this.props.cowItem.rfid}</td>
          <td>{this.props.cowItem.breed}</td>
        </tr>
      </div>
    )
  }
}

export default CowTableRow