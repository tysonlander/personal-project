import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import CowsStepTableRow from './CowsStepTableRow'

class CowsStepAlert extends Component{
  constructor(){
    super()
    this.state = {
      cowsLowSteps: []
    }
  }
  
  componentDidMount(){
    this.getCowsNotStepping()
  }

  getCowsNotStepping(){
    axios
    .get(`/api/cowsLowSteps/${this.props.id}?stepFlag=${this.props.stepFlag}&ydaDate=${this.props.ydaDate}`)
    .then((res) => {
      this.setState({
        cowsLowSteps: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    let cowList = this.state.cowsLowSteps.map((element, index) => {
      return(
        <CowsStepTableRow
          cow={element}
          key={index}
          
        />
      )
    })

    return(
      <div>
        <h3>Steps under {this.props.stepFlag}/day <span><Link to='/dashboard/HealthSettings'>edit</Link></span></h3>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}
        
        <div>
        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Milk (lbs)</th>
              <th>Steps</th>
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
    // sleepFlag: reduxState.healthFlags.sleep,
    stepFlag: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    // temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsStepAlert)