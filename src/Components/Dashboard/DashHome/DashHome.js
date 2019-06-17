import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuickActions from './QuickActions'
import MilkProduction from '../BusinessReports/MilkProduction'
import HerdHealthTwoWkAvg from '../HealthReports/HerdHealthTwoWkAvg'

class DashHome extends Component{
  constructor() {
    super()
    this.state = {
      greeting: ''
    }
  }

  componentDidMount(){
    let fullDate = new Date();
    let hour = fullDate.getHours();
    if(hour <= 11){
      this.setState({
        greeting: 'Good Morning'
      })
    } else if (hour <= 16){
      this.setState({
        greeting: 'Good Afternoon'
      })
    } else {
      this.setState({
        greeting: 'Good Evening'
      })
    }
    console.log("this is the hour:", hour)
  }

  render(){
    return(
    <>
      <h1>{this.state.greeting}, Farmer {this.props.firstName}</h1>
      <QuickActions/>
      <MilkProduction id={this.props.id}/>
      <HerdHealthTwoWkAvg id={this.props.id}/>
    </>

    )
  }
}

function mapStateToProps(reduxState){
  return{
    firstName: reduxState.user.firstName,
    id: reduxState.user.id
  }
}

export default connect(mapStateToProps)(DashHome)