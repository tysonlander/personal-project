import React, {Component} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'


class ReportByBreed extends Component{
  constructor(){
    super();
    this.state = {
      chartData: []
    }
  }


  componentDidMount(){
    this.getChartData();
    
  }
  
  getChartData(){
    axios
    .get(`/api/herdstatbreed/${this.props.id}`)
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
    console.log('updated log:', this.state.chartData)
    const {chartData} = this.state
    let filteredChocolateCow = 
    
    // let jersyCow = []
    // for(let i = 0; i < this.state.chartData.length; i++){
    //   for(let key in this.state.chartData[i]){
        
    //     if(key === "chocolate cow") {
    //       jersyCow.push(this.state.chartData[i].totalmilk)
    //     }
    //   }
    // }
    // console.log('jersyCow variable:', jersyCow)
    return(
      
      <div>
        <div className='page-header'>
          <h1>Reports</h1>
          <hr></hr>
        </div>
        <h1>Report by breed</h1>

        <Bar
          data={{labels:['jan', 'feb'],
          datasets: [
            {
              type: 'bar',
              label: 'strawberry',
              backgroundColor: 'rgba(217, 83, 79, 0.75)',
              data: [50, 75]
            },{
              type: 'bar',
              label: 'chocolate',
              backgroundColor: 'rgba(27, 83, 79, 0.75)',
              data: [100, 150]
            }

          ]
          }}
          options={{
            title: {
              display: true,
              text: 'Milk Yield by Breed',
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

export default ReportByBreed