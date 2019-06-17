import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import CowsSleepTableRow from './CowsSleepTableRow'

class CowSleepAlert extends Component{
  constructor(){
    super()
    this.state = {
      cowsNotSleeping: []
    }
  }
  
  componentDidMount(){
    this.getCowsNotSleeping()
  }

  getCowsNotSleeping(){
    axios
    .get(`/api/cowsNotSleeping/${this.props.id}?sleepFlag=${this.props.sleepFlag}&ydaDate=${this.props.ydaDate}`)
    .then((res) => {
      console.log('response from server', res.data)
      this.setState({
        cowsNotSleeping: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    console.log('state:', this.state.cowsNotSleeping)
    
    let cowList = this.state.cowsNotSleeping.map((element, index) => {
      return(
        <CowsSleepTableRow
          cow={element}
          key={index}
          
        />
      )
    })

    return(
      <div>
        <h3>Sleep Less Than {this.props.sleepFlag} minutes <span><Link to='/dashboard/HealthSettings'>edit</Link></span></h3>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}
        
        <div>
        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Milk (lbs)</th>
              <th>Sleep (min)</th>
              <th>Actions</th>
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

function mapStateToProps(reduxState){
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