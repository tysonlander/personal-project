import React, {Component} from 'react'
import * as Icon from 'react-feather'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCowId} from '../../../../redux/oneCowHealthReducer'


class CowTempTableRow extends Component{
  handleUpdateCowId = (e) => {
    this.props.updateCowId({cowId: this.props.cow.id})
  }

  render(){
    return(
      <>
        <tr>
          <td>{this.props.cow.rfid}</td>
          <td>{this.props.cow.milk}</td>
          <td>{this.props.cow.avg_temp}</td>
          <td><Link to='/dashboard/HealthIndividualReport' onClick={(e) => this.handleUpdateCowId(e)}>Details <Icon.ArrowRightCircle size={15}/></Link> </td>
        </tr>
      </>
    )
  }
}

export default connect(null, {updateCowId})(CowTempTableRow)