import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import CowsStressTableRow from './CowsStressTableRow'
import * as Icon from 'react-feather'

class CowsStressAlert extends Component {
  constructor() {
    super()
    this.state = {
      cowsHighStress: []
    }
  }

  componentDidMount() {
    this.getCowsHighStress()
  }

  getCowsHighStress() {
    axios
      .get(`/api/cowsHighStress/${this.props.id}?stressFlag=${this.props.stressFlag}&ydaDate=${this.props.ydaDate}`)
      .then((res) => {
        this.setState({
          cowsHighStress: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    let cowList = this.state.cowsHighStress.map((element, index) => {
      return (
        <CowsStressTableRow
          cow={element}
          key={index}

        />
      )
    })

    return (
      <div className='alert-container'>
        <h3>Stress</h3>
        <hr />
        <h5><Icon.AlertCircle size={20} stroke='#f88379' className='heart-icon' />Stress above {this.props.stressFlag}<span className='span-a'>
          <Link to='/dashboard/HealthSettings'>
            <Icon.Edit3 className='icon' size={20} />
          </Link></span>
        </h5>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}

        <div>
          <table>
            <thead>
              <tr>
                <th className='column1'>RFID</th>
                <th className='column2'>Milk (lbs)</th>
                <th className='column3'>Stress Index</th>
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
    stressFlag: reduxState.healthFlags.stress,
    // temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsStressAlert)