import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import CowTempTableRow from './CowsTempTableRow'
import * as Icon from 'react-feather'

class CowsTempAlert extends Component {
  constructor() {
    super()
    this.state = {
      cowsHighTemp: []
    }
  }

  componentDidMount() {
    this.getCowsHighTemp()
  }

  getCowsHighTemp() {
    axios
      .get(`/api/cowsHighTemp/${this.props.id}?tempFlag=${this.props.tempFlag}&ydaDate=${this.props.ydaDate}`)
      .then((res) => {
        this.setState({
          cowsHighTemp: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    let cowList = this.state.cowsHighTemp.map((element, index) => {
      return (
        <CowTempTableRow
          cow={element}
          key={index}

        />
      )
    })

    return (
      <div className='alert-container'>
        <h3>Temperature</h3>
        <hr />

        <h5><Icon.AlertCircle size={20} stroke='#f88379' className='heart-icon' />Temperature above {this.props.tempFlag}<span className='span-a'><Link to='/dashboard/HealthSettings'><Icon.Edit3 className='icon' size={20} /></Link></span></h5>


        <div>
          <table>
            <thead>
              <tr>
                <th className='column1'>RFID</th>
                <th className='column2'>Milk (lbs)</th>
                <th className='column3'>Temperature</th>
                <th className='column4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cowList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    id: reduxState.user.id,
    // milk: reduxState.healthFlags.milk,
    // sleepFlag: reduxState.healthFlags.sleep,
    // stepFlag: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    tempFlag: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsTempAlert)