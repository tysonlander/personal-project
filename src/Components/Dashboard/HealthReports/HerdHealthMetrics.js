import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class HerdHealthMetrics extends Component {
  constructor(){
    super()
    this.state = {
      herdHealthData: []
    }
  }

  componentDidMount(){
    this.getHerdHealth();
  }

  getHerdHealth(){
    axios
    .get(`/api/avgHerdHealth/${this.props.id}`)
    .then((res) => {
      this.setState({
        herdHealthData: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }

  render(){
    console.log('this is the 14 day avg health:', this.state.herdHealthData)
    let avgSleep = 0
    let avgSteps = 0
    let avgStress = 0
    let avgTemp = 0
    const {herdHealthData} = this.state



    return(
      <div>
        <h3>Herd Health Metrics (14 Day Avg.)</h3>
        <table>
          <thead>
            <tr>
              <th>Sleep</th>
              <th>Steps</th>
              <th>Stress</th>
              <th>Temp</th>
              <th>Avg Milk lbs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>20</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    id: reduxState.user.id
  }
}

export default connect(mapStateToProps)(HerdHealthMetrics)