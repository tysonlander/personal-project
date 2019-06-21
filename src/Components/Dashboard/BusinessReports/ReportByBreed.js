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
    const {chartData} = this.state

    // set data for chocolate cow breed
    let filteredChocolateCows = chartData.filter(element => element.breed === "chocolate cow")
    let months = []
    let headOfCowChocolate = []
    let totalMilkChocolate = []
    for(let i = 0; i< filteredChocolateCows.length; i++){
      months.push(filteredChocolateCows[i].month)
      headOfCowChocolate.push(filteredChocolateCows[i].head_of_cow)
      totalMilkChocolate.push(filteredChocolateCows[i].totalmilk)
    }

    // set data for brown cow breed
    let filteredBrownCows = chartData.filter(element => element.breed === "strawberry cow")
    let headOfCowBrown = []
    let totalMilkBrown = []
    for(let i = 0; i< filteredBrownCows.length; i++){
      headOfCowBrown.push(filteredBrownCows[i].head_of_cow)
      totalMilkBrown.push(filteredBrownCows[i].totalmilk)
    }
    
    
    return(
      
      <div className='chart-size-1'>
        <Bar
          data={{labels: months,
          datasets: [
            {
              type: 'bar',
              label: 'Chocolate',
              backgroundColor: 'rgba(217, 83, 79, 0.75)',
              data: totalMilkChocolate
            },{
              type: 'bar',
              label: 'brown',
              backgroundColor: 'rgba(27, 83, 79, 0.75)',
              data: totalMilkBrown
            }

          ]
          }}
          options={{
            title: {
              display: true,
              text: 'Milk Yield by Breed (lbs)',
              fontSize: 25
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
    )
  }
}

export default ReportByBreed