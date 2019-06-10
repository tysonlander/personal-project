import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios'

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
    for(let i = 0; i < this.state.chartData.length; i++) {
      totalMilk.push(this.state.chartData[i].totalMilk)
      dataDate.push(this.state.chartData[i].date.substring(0, 10))
    }
    
    return(
      <div>
        <div className="chart">
          <Line 
            data={{labels: dataDate,
            datasets: [
              {
                label: 'Lbs',
                data: totalMilk,
                backgroundColor:[
                  'rgba(11, 102, 38, 0.6)'
                ]
              }
            ]}}
            options={{
              title: {
                display: true,
                text: 'Total Milk Production',
                fontSize: 25
              },
              legend: {
                display: true,
                position: 'right',
                fontSize: 25
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default MilkProduction