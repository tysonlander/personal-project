import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import CowsSleepTableRow from './CowsSleepTableRow'
import * as Icon from 'react-feather'

class CowSleepAlert extends Component {
  constructor() {
    super()
    this.state = {
      cowsNotSleeping: []
    }
  }

  componentDidMount() {
    this.getCowsNotSleeping()
  }

  getCowsNotSleeping() {
    axios
      .get(`/api/cowsNotSleeping/${this.props.id}?sleepFlag=${this.props.sleepFlag}&ydaDate=${this.props.ydaDate}`)
      .then((res) => {
        console.log('response from server', res.data)
        this.setState({
          cowsNotSleeping: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    console.log('state:', this.state.cowsNotSleeping)

    let cowList = this.state.cowsNotSleeping.map((element, index) => {
      return (
        <CowsSleepTableRow
          cow={element}
          key={index}

        />
      )
    })

    return (
      <div className='alert-container'>
        <h3>Sleep</h3>
        <hr />
        <h5><Icon.AlertCircle size={20} stroke='#f88379' className='heart-icon' />Cows Sleeping Less Than {this.props.sleepFlag} min / day<span className='span-a'><Link to='/dashboard/HealthSettings'><Icon.Edit3 className='icon' size={20} /></Link></span></h5>

        <div>
          <table>
            <thead>
              <tr>
                <th className='column1'>RFID</th>
                <th className='column2'>Milk (lbs)</th>
                <th className='column3'>Sleep (min)</th>
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
    sleepFlag: reduxState.healthFlags.sleep,
    // steps: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    // temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowSleepAlert)