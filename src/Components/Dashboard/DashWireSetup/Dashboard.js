import React, {Component} from 'react'
import axios from 'axios';
import {updateUser} from '../../../redux/userReducer'
import {connect} from 'react-redux'
import './Dashboard.css'

import DashNav from './DashTopNav'
import dashboardrouter from '../dashboardrouter'
import DashSideNav from './DashSideNav'



class Dashboard extends Component{

  componentDidMount(){
    axios
    .get('/auth/user')
    .then((res) => {
      console.log(res.data)
      //then sends the res data to the state on refresh of the page
      this.props.updateUser(res.data) 
    })
    .catch((err) =>
      {this.props.history.push('/')}
    )
  }
  
  render(){
    return(
    <>
    <DashNav/>
      <div className='dashboard-main'>
        <DashSideNav/>
        <div className='app-page-display-box'>
          {dashboardrouter} 

        </div>
      </div>
    </>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, {updateUser})(Dashboard)