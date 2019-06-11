import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'
import './MilkProduction.css'

class MilkProduction extends Component{
  constructor(){
    super();
    this.state = {
      chartData: {}
    }
  }

  componentDidMount(){
    this.getChartData();
    
  }
  
  getChartData(){
    axios
    .get(`/api/herdstat/${this.props.id}`)
    .then((res) => {
      this.setState({
        chartData: res.data
      })
    })
    .catch((err) => 
      {if(err) throw err}
    )
  }


  render(){
    let dataDate = []
    let totalMilk = []
    let avgStress =[]
    for(let i = 0; i < this.state.chartData.length; i++) {
      totalMilk.push(this.state.chartData[i].totalMilk)
      avgStress.push(this.state.chartData[i].avgStress)
      dataDate.push(this.state.chartData[i].date.substring(0, 10))
    }
    return(
        <div className="chart">
          <Line 
            data={{labels: dataDate,
            datasets: [
              {
                label: 'Lbs Milk',
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
                data: totalMilk,
                id: 'y-axis-0'
              },
              {
                label: 'Avg Cow Stress',
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
                data: avgStress,
                id: 'y-axis-1'
              }
            ],
            
          }}
            options={{
              title: {
                display: true,
                text: 'Milk Production vs. Stress',
                fontSize: 25
              },
              legend: {
                display: true,
                position: 'right',
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
    )
  }
}

export default MilkProduction