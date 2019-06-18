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
    let ydaAvgMilk = 0
    let ydaAvgSleep = 0
    let ydaAvgSteps = 0
    let ydaAvgStress = 0
    let ydaAvgTemp = 0
    let dataDate = ''
    const {herdHealthData} = this.state
    if(herdHealthData.length !== 0){
      ydaAvgMilk = Number(herdHealthData[0].avgMilk)
      ydaAvgSleep = Number(herdHealthData[0].avgSleep)
      ydaAvgSteps = Number(herdHealthData[0].avgSteps)
      ydaAvgStress = Number(herdHealthData[0].avgStress)
      ydaAvgTemp = Number(herdHealthData[0].avgTemp)
      dataDate = herdHealthData[0].date.substring(5, 10)
    }

    return(
      <div>
        <h3>Average Herd Health Metrics ({dataDate})</h3>
        <table>
          <thead>
            <tr>
              <th>Sleep</th>
              <th>Steps</th>
              <th>Stress</th>
              <th>Temp</th>
              <th>Milk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ydaAvgSleep} min</td>
              <td>{ydaAvgSteps}</td>
              <td>{ydaAvgStress}</td>
              <td>{ydaAvgTemp}<span>&#8457;</span></td>
              <td>{ydaAvgMilk} lbs</td>
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