import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import CowsMilkTableRow from './CowsMilkTableRow'
import * as Icon from 'react-feather'

class CowsMilkAlert extends Component {
  constructor() {
    super()
    this.state = {
      cowsLowMilk: []
    }
  }

  componentDidMount() {
    this.getCowsLowMilk()
  }

  getCowsLowMilk() {
    axios
      .get(`/api/cowsLowMilk/${this.props.id}?milkFlag=${this.props.milkFlag}&ydaDate=${this.props.ydaDate}`)
      .then((res) => {
        this.setState({
          cowsLowMilk: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    let cowList = this.state.cowsLowMilk.map((element, index) => {
      return (
        <CowsMilkTableRow
          cow={element}
          key={index}
        />
      )
    })

    return (
      <div className='alert-container'>
        <h3>Milk Yield</h3>
        <hr />
        <h5><Icon.AlertCircle size={20} stroke='#f88379' className='heart-icon' />Milk lower than {this.props.milkFlag} lbs/day<span className='span-a'><Link to='/dashboard/HealthSettings'><Icon.Edit3 className='icon' size={20} /></Link></span></h5>

        <div>
          <table>
            <thead>
              <tr>
                <th className='column1'>RFID</th>
                <th className='column2'>Milk (lbs)</th>
                <th className='column3'>Actions</th>
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
    milkFlag: reduxState.healthFlags.milk,
    // sleepFlag: reduxState.healthFlags.sleep,
    // stepFlag: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    // tempFlag: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsMilkAlert)