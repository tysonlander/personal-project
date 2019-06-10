import React, {Component} from 'react'
import * as Icon from 'react-feather'
import axios from 'axios'


class CowTableRow extends Component {

  handleDeleteCombo = () => {
    axios
      .delete(`/api/cow/${this.props.cowItem.id}`)
      .then(res => {
        alert(`Cow with RFID# ${this.props.cowItem.rfid}, has been deleted.`)
        this.props.handleRopeCows()
      })
      .catch(err => {
        if (err) throw err
      })
  }


  render(){
    return(
      <>
        <tr>
          <td>{this.props.cowItem.rfid}</td>
          <td>{this.props.cowItem.breed}</td>
          <td><Icon.Trash2 size={20} onClick={this.handleDeleteCombo}/></td>
        </tr>
      </>
    )
  }
}

export default CowTableRow