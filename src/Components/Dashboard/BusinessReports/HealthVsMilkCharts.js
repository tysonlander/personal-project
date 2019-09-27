import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

class HerdHealthMetrics extends Component {
  constructor() {
    super();
    this.state = {
      herdHealthData: []
    };
  }

  componentDidMount() {
    this.getHerdHealth();
  }

  getHerdHealth() {
    axios
      .get(`/api/avgHerdHealth/${this.props.id}`)
      .then(res => {
        this.setState({
          herdHealthData: res.data
        });
      })
      .catch(err => {
        if (err) throw err;
      });
  }

  render() {
    console.log("this is the 14 day avg health:", this.state.herdHealthData);
    let avgMilk = [];
    let avgSleep = [];
    let avgSteps = [];
    let avgStress = [];
    let avgTemp = [];
    let dateRange = [];
    // let FarhSymbol =
    const { herdHealthData } = this.state;
    for (let i = herdHealthData.length - 1; i >= 0; i--) {
      avgMilk.push(Number(herdHealthData[i].avgMilk));
      avgSleep.push(Number(herdHealthData[i].avgSleep));
      avgSteps.push(Number(herdHealthData[i].avgSteps));
      avgStress.push(Number(herdHealthData[i].avgStress));
      avgTemp.push(Number(herdHealthData[i].avgTemp));
      dateRange.push(herdHealthData[i].date.substring(5, 10));
    }

    return (
      <div>
        {/* sleep vs milk graphed */}
        <div className="business-reports-health">
          <div className="chart-size-2">
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: "Avg Milk (lbs)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75, 192, 192, 0.4)",
                    borderColor: "rgba(75, 192, 192, 1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75, 192, 192, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgMilk,
                    id: "y-axis-0"
                  },
                  {
                    label: "Avg Sleep (min)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(141, 64, 192, .5)",
                    borderColor: "rgba(141, 64, 192)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(141, 64, 192)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(141, 64, 192)",
                    pointHoverBorderColor: "rgba(141, 64, 192)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgSleep,
                    id: "y-axis-1"
                  }
                ]
              }}
              options={{
                title: {
                  display: true,
                  text: "Sleep vs Milk",
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "bottom",
                  fontSize: 25
                },
                scales: {
                  xAxes: [
                    {
                      stacked: true
                    }
                  ],
                  yAxes: [
                    {
                      stacked: true,
                      position: "left",
                      id: "y-axis-0"
                    },
                    {
                      stacked: false,
                      position: "right",
                      id: "y-axis-1",
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>

          {/* steps vs milk graphed */}
          <div className="chart-size-2">
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: "Avg Milk (lbs)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75, 192, 192, 0.4)",
                    borderColor: "rgba(75, 192, 192, 1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75, 192, 192, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgMilk,
                    id: "y-axis-0"
                  },
                  {
                    label: "Avg Steps",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(15, 172, 3, 0.4)",
                    borderColor: "rgba(15, 172, 3)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(15, 172, 3)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(15, 172, 3)",
                    pointHoverBorderColor: "rgba(15, 172, 3)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgSteps,
                    id: "y-axis-1"
                  }
                ]
              }}
              options={{
                title: {
                  display: true,
                  text: "Steps vs Milk",
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "bottom",
                  fontSize: 25
                },
                scales: {
                  xAxes: [
                    {
                      stacked: true
                    }
                  ],
                  yAxes: [
                    {
                      stacked: true,
                      position: "left",
                      id: "y-axis-0"
                    },
                    {
                      stacked: false,
                      position: "right",
                      id: "y-axis-1",
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
          {/* stress vs milk graphed */}
          <div className="chart-size-2">
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: "Avg Milk (lbs)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75, 192, 192, 0.4)",
                    borderColor: "rgba(75, 192, 192, 1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75, 192, 192, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgMilk,
                    id: "y-axis-0"
                  },
                  {
                    label: "Avg Stress",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(254, 172, 0, 0.4)",
                    borderColor: "rgba(254, 172, 0, 1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(254, 172, 0, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(254, 172, 0, 1)",
                    pointHoverBorderColor: "rgba(254, 172, 0, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgStress,
                    id: "y-axis-1"
                  }
                ]
              }}
              options={{
                title: {
                  display: true,
                  text: "Stress vs Milk",
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "bottom",
                  fontSize: 25
                },
                scales: {
                  xAxes: [
                    {
                      stacked: true
                    }
                  ],
                  yAxes: [
                    {
                      stacked: true,
                      position: "left",
                      id: "y-axis-0"
                    },
                    {
                      stacked: false,
                      position: "right",
                      id: "y-axis-1",
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
          {/* temp vs milk */}
          <div className="chart-size-2">
            <Line
              data={{
                labels: dateRange,
                datasets: [
                  {
                    label: "Avg Milk (lbs)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75, 192, 192, 0.4)",
                    borderColor: "rgba(75, 192, 192, 1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(75, 192, 192, 1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgMilk,
                    id: "y-axis-0"
                  },
                  {
                    label: "Avg Temp (F)",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(229, 44, 0, 0.4)",
                    borderColor: "rgba(229, 44, 0)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(229, 44, 0)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(229, 44, 0)",
                    pointHoverBorderColor: "rgba(229, 44, 0)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: avgTemp,
                    id: "y-axis-1"
                  }
                ]
              }}
              options={{
                title: {
                  display: true,
                  text: "Temperature vs Milk",
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "bottom",
                  fontSize: 25
                },
                scales: {
                  xAxes: [
                    {
                      stacked: true
                    }
                  ],
                  yAxes: [
                    {
                      stacked: true,
                      position: "left",
                      id: "y-axis-0"
                    },
                    {
                      stacked: false,
                      position: "right",
                      id: "y-axis-1",
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
        <h4>Didn't see a report you were looking for? Contact us.</h4>
      </div>
    );
  }
}

export default HerdHealthMetrics;
