import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import CowsStressTableRow from './CowsStressTableRow'

class CowsStressAlert extends Component{
  constructor(){
    super()
    this.state = {
      cowsHighStress: []
    }
  }
  
  componentDidMount(){
    this.getCowsHighStress()
  }

  getCowsHighStress(){
    axios
    .get(`/api/cowsHighStress/${this.props.id}?stressFlag=${this.props.stressFlag}&ydaDate=${this.props.ydaDate}`)
    .then((res) => {
      this.setState({
        cowsHighStress: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    let cowList = this.state.cowsHighStress.map((element, index) => {
      return(
        <CowsStressTableRow
          cow={element}
          key={index}
          
        />
      )
    })

    return(
      <div>
        <h3>Stress above {this.props.stressFlag} <span><Link to='/dashboard/HealthSettings'>edit</Link></span></h3>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}
        
        <div>
        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Milk (lbs)</th>
              <th>Stress</th>
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
    // stepFlag: reduxState.healthFlags.steps,
    stressFlag: reduxState.healthFlags.stress,
    // temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsStressAlert)