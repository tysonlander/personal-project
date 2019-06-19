import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'
import CowsMilkTableRow from './CowsMilkTableRow'

class CowsMilkAlert extends Component{
  constructor(){
    super()
    this.state = {
      cowsLowMilk: []
    }
  }
  
  componentDidMount(){
    this.getCowsLowMilk()
  }

  getCowsLowMilk(){
    axios
    .get(`/api/cowsLowMilk/${this.props.id}?milkFlag=${this.props.milkFlag}&ydaDate=${this.props.ydaDate}`)
    .then((res) => {
      this.setState({
        cowsLowMilk: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    let cowList = this.state.cowsLowMilk.map((element, index) => {
      return(
        <CowsMilkTableRow
          cow={element}
          key={index}
        />
      )
    })

    return(
      <div>
        <h3>Milk lower than {this.props.milkFlag} lbs/day<span><Link to='/dashboard/HealthSettings'>edit</Link></span></h3>

        {/* <h1>{this.props.id}</h1>
        <h1>Sleep Flag {this.props.sleepFlag}</h1>
        <h1>{this.props.ydaDate}</h1> */}
        
        <div>
        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Milk (lbs)</th>
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
    milkFlag: reduxState.healthFlags.milk,
    // sleepFlag: reduxState.healthFlags.sleep,
    // stepFlag: reduxState.healthFlags.steps,
    // stress: reduxState.healthFlags.stress,
    // tempFlag: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps)(CowsMilkAlert)