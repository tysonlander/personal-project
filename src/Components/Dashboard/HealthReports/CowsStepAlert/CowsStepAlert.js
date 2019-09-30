import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import CowsStepTableRow from './CowsStepTableRow'
import * as Icon from 'react-feather'

class CowsStepAlert extends Component {
  constructor() {
    super()
    this.state = {
      cowsLowSteps: []
    }
  }

  componentDidMount() {
    this.getCowsNotStepping()
  }

  getCowsNotStepping() {
    axios
      .get(`/api/cowsLowSteps/${this.props.id}?stepFlag=${this.props.stepFlag}&ydaDate=${this.props.ydaDate}`)
      .then((res) => {
        this.setState({
          cowsLowSteps: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    let cowList = this.state.cowsLowSteps.map((element, index) => {
      return (
        <CowsStepTableRow
          cow={element}
          key={index}

        />
      )
    })

    return (
      <div className='alert-container'>
        <h3>Steps</h3>
        <hr />
        <h5><Icon.AlertCircle size={20} stroke='#f88379' className='heart-icon' />Steps under {this.props.stepFlag} / day<span className='span-a'><Link to='/dashboard/HealthSettings'><Icon.Edit3 className='icon' size={20} /></Link></span></h5>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}

        <div>
          <table>
            <thead>
              <tr>
                <th className='column1'>RFID</th>
                <th className='column2'>Milk (lbs)</th>
                <th className='column3'>Steps</th>
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
    stepFlag: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    // temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsStepAlert)