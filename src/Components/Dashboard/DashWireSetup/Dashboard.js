import React, {Component} from 'react'
import DashNav from './DashTopNav'
import dashboardrouter from '../dashboardrouter'
import DashSideNav from './DashSideNav'
import './Dashboard.css'

class Dashboard extends Component{
  render(){
    return(
    <>
    <DashNav/>
      <div className='dashboard-main'>
        <DashSideNav/>
        {dashboardrouter} 
      </div>
    </>
    )
  }
}

export default Dashboard