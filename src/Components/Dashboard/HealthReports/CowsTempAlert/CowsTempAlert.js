import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import CowTempTableRow from './CowsTempTableRow'

class CowsTempAlert extends Component{
  constructor(){
    super()
    this.state = {
      cowsHighTemp: []
    }
  }
  
  componentDidMount(){
    this.getCowsHighTemp()
  }

  getCowsHighTemp(){
    axios
    .get(`/api/cowsHighTemp/${this.props.id}?tempFlag=${this.props.tempFlag}&ydaDate=${this.props.ydaDate}`)
    .then((res) => {
      this.setState({
        cowsHighTemp: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    let cowList = this.state.cowsHighTemp.map((element, index) => {
      return(
        <CowTempTableRow
          cow={element}
          key={index}
          
        />
      )
    })

    return(
      <div>
        <h3>Temperature above {this.props.tempFlag}<span><Link to='/dashboard/HealthSettings'>edit</Link></span></h3>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}
        
        <div>
        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Milk (lbs)</th>
              <th>Temperature</th>
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
    // stress: reduxState.healthFlags.stress,
    tempFlag: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsTempAlert)