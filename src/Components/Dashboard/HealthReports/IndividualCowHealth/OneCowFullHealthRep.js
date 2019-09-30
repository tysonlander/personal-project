import React, { Component } from 'react'
// import * as Icon from 'react-feather'
import { connect } from 'react-redux'
import axios from 'axios';
import { Line } from 'react-chartjs-2'




class CowFullHealthRep extends Component {
  constructor() {
    super()
    this.state = {
      cowHealth: []
    }
  }


  componentDidMount() {
    this.getIndividualHealthReport()
  }

  getIndividualHealthReport() {
    axios
      .get(`/api/oneCowHealth/${this.props.cowId}`)
      .then((res) => {
        this.setState({
          cowHealth: res.data
        })
      })
      .catch((err) => { if (err) throw err }
      )
  }

  render() {
    let ydaAvgMilk = 0
    let ydaAvgSleep = 0
    let ydaAvgSteps = 0
    let ydaAvgStress = 0
    let ydaAvgTemp = 0
    let dataDate = ''
    let ydaLowBPM = 0
    let ydaHighBPM = 0
    let ydaAvgBPM = 0

    let milk = []
    let sleep = []
    let steps = []
    let stress = []
    let avgTemp = []
    let dateRange = []

    const { cowHealth } = this.state
    if (cowHealth.length !== 0) {
      ydaAvgMilk = Number(cowHealth[0].milk)
      ydaAvgSleep = Number(cowHealth[0].sleep)
      ydaAvgSteps = Number(cowHealth[0].steps)
      ydaAvgStress = Number(cowHealth[0].stres_index)
      ydaAvgTemp = Number(cowHealth[0].avg_temp)
      dataDate = cowHealth[0].date.substring(5, 10)
      ydaLowBPM = Number(cowHealth[0].low_bpm)
      ydaHighBPM = Number(cowHealth[0].high_bpm)
      ydaAvgBPM = Number(cowHealth[0].avg_bpm)
    }

    for (let i = cowHealth.length - 1; i >= 0; i--) {
      milk.push(Number(cowHealth[i].milk))
      sleep.push(Number(cowHealth[i].sleep))
      steps.push(Number(cowHealth[i].steps))
      stress.push(Number(cowHealth[i].stres_index))
      avgTemp.push(Number(cowHealth[i].avg_temp))
      dateRange.push(cowHealth[i].date.substring(5, 10))
    }

    return (
      <div className='individual-health-report'>
        <div className='page-header'>
          <h1>Individual Health Report</h1>
          <hr></hr>
        </div>

        <div className='row-a'>
          <div className='health-snapshot'>
            <h3>Yesterday's Snapshot</h3>
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

          <div className='health-snapshot heart-overview'>
            <h3>Heart Health</h3>
            <table>
              <thead>
                <tr>
                  <th>Low BPM</th>
                  <th>High BPM</th>
                  <th>Avg BPM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ydaLowBPM} min</td>
                  <td>{ydaHighBPM}</td>
                  <td>{ydaAvgBPM}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className='center-text'>Cow Health (14 Day Avg.)</h3>
        <div className='charts-container'>
          {/* sleep vs milk graphed */}
          <div className='chart-size-2'>
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: 'Milk (lbs)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.4)',
                    borderColor: 'rgba(75, 192, 192, 1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75, 192, 192, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: milk,
                    id: 'y-axis-0'
                  },
                  {
                    label: 'Sleep (min)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(141, 64, 192, .5)',
                    borderColor: 'rgba(141, 64, 192)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(141, 64, 192)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(141, 64, 192)',
                    pointHoverBorderColor: 'rgba(141, 64, 192)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: sleep,
                    id: 'y-axis-1'
                  }
                ],

              }}
              options={{
                title: {
                  display: true,
                  text: 'Sleep vs Milk',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  fontSize: 25
                },
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true,
                    position: 'left',
                    id: 'y-axis-0',
                  }, {
                    stacked: false,
                    position: 'right',
                    id: 'y-axis-1',
                    ticks: {
                      beginAtZero: true,
                    }
                  }]
                }
              }}
            />
          </div>
          {/* steps vs milk graphed */}
          <div className='chart-size-2'>
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: 'Milk (lbs)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.4)',
                    borderColor: 'rgba(75, 192, 192, 1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75, 192, 192, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: milk,
                    id: 'y-axis-0'
                  },
                  {
                    label: 'Steps',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(15, 172, 3, 0.4)',
                    borderColor: 'rgba(15, 172, 3)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(15, 172, 3)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(15, 172, 3)',
                    pointHoverBorderColor: 'rgba(15, 172, 3)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: steps,
                    id: 'y-axis-1'
                  }
                ],

              }}
              options={{
                title: {
                  display: true,
                  text: 'Steps vs Milk',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  fontSize: 25
                },
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true,
                    position: 'left',
                    id: 'y-axis-0',
                  }, {
                    stacked: false,
                    position: 'right',
                    id: 'y-axis-1',
                    ticks: {
                      beginAtZero: true,
                    }
                  }]
                }
              }}
            />
          </div>
          {/* stress vs milk graphed */}
          <div className='chart-size-2'>
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: 'Milk (lbs)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.4)',
                    borderColor: 'rgba(75, 192, 192, 1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75, 192, 192, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: milk,
                    id: 'y-axis-0'
                  },
                  {
                    label: 'Avg Stress',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(254, 172, 0, 0.4)',
                    borderColor: 'rgba(254, 172, 0, 1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(254, 172, 0, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(254, 172, 0, 1)',
                    pointHoverBorderColor: 'rgba(254, 172, 0, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: stress,
                    id: 'y-axis-1'
                  }
                ],

              }}
              options={{
                title: {
                  display: true,
                  text: 'Stress vs Milk',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  fontSize: 25
                },
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true,
                    position: 'left',
                    id: 'y-axis-0',
                  }, {
                    stacked: false,
                    position: 'right',
                    id: 'y-axis-1',
                    ticks: {
                      beginAtZero: true,
                    }
                  }]
                }
              }}
            />
          </div>
          {/* temp vs milk */}
          <div className='chart-size-2'>
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: 'Milk (lbs)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75, 192, 192, 0.4)',
                    borderColor: 'rgba(75, 192, 192, 1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75, 192, 192, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: milk,
                    id: 'y-axis-0'
                  },
                  {
                    label: 'Avg Temp (F)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(229, 44, 0, 0.4)',
                    borderColor: 'rgba(229, 44, 0)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(229, 44, 0)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(229, 44, 0)',
                    pointHoverBorderColor: 'rgba(229, 44, 0)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgTemp,
                    id: 'y-axis-1'
                  }
                ],

              }}
              options={{
                title: {
                  display: true,
                  text: 'Temperature vs Milk',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  fontSize: 25
                },
                scales: {
                  xAxes: [{
                    stacked: true
                  }],
                  yAxes: [{
                    stacked: true,
                    position: 'left',
                    id: 'y-axis-0',
                  }, {
                    stacked: false,
                    position: 'right',
                    id: 'y-axis-1',
                    ticks: {
                      beginAtZero: true,
                    }
                  }]
                }
              }}
            />
          </div>
        </div>

        <hr className='closing-hr' />
        <div className='center-aligned-2butn'>
          <button className='butn-two-secondary' onClick={() => { this.props.history.push('/dashboard') }}>Back to Dashboard</button>
          <button className='butn-two-primary' onClick={() => { this.props.history.push('/dashboard/Health') }}>Back</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    cowId: reduxState.oneCowHealth.cowId
  }
}

export default connect(mapStateToProps)(CowFullHealthRep)