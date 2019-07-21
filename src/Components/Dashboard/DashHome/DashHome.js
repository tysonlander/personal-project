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
  }

  render(){
    return(
    <section className='dashboard-home'>
      <h1>{this.state.greeting}, Farmer {this.props.lastName}</h1>
      <div className='row-two'>
        <div className='column-one'>
          <MilkProduction id={this.props.id}/>
          <HerdHealthTwoWkAvg id={this.props.id}/>
        </div>
        
        <div className='quick-actions'>
          <QuickActions/>

        </div>

      </div>
      
    </section>

    )
  }
}

function mapStateToProps(reduxState){
  return{
    firstName: reduxState.user.firstName,
    lastName: reduxState.user.lastName,
    id: reduxState.user.id
  }
}

export default connect(mapStateToProps)(DashHome)