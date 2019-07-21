import React, {Component} from 'react'
import axios from 'axios'

class HerdHealthTwoWkAvg extends Component {
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
    const {herdHealthData} = this.state
    let milk = 0
    let sleep = 0
    let steps = 0
    let stress = 0
    let temp = 0
    let dateRange = []
    // let FarhSymbol = 
    for(let i = herdHealthData.length - 1; i >= 0; i--){
      milk += Number(herdHealthData[i].avgMilk)
      sleep += Number(herdHealthData[i].avgSleep)
      steps += Number(herdHealthData[i].avgSteps)
      stress += Number(herdHealthData[i].avgStress)
      temp += Number(herdHealthData[i].avgTemp)
      dateRange.push(herdHealthData[i].date.substring(5, 10))
    }
    let avgMilk = (milk / herdHealthData.length).toFixed(2)
    let avgSleep = (sleep / herdHealthData.length).toFixed(0)
    let avgSteps = (steps / herdHealthData.length).toFixed(0)
    let avgStress = (stress / herdHealthData.length).toFixed(2)
    let avgTemp = (temp / herdHealthData.length).toFixed(2)

    console.log('milk total', avgMilk)

    return(
      <div className='keystats-container'>
        <h3>Key Herd Health Stats (2 Week Avg.)</h3>
        <table>
          <thead>
            <tr className='top-of-table'>
              <th>Sleep</th>
              <th>Steps</th>
              <th>Stress</th>
              <th>Temp</th>
              <th>Milk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{avgSleep} min</td>
              <td>{avgSteps}</td>
              <td>{avgStress}</td>
              <td>{avgTemp}<span>&#8457;</span></td>
              <td>{avgMilk} lbs</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}



export default HerdHealthTwoWkAvg