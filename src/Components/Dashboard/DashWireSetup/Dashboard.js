import React, {Component} from 'react'
import axios from 'axios';
import {updateUser} from '../../../redux/userReducer'
import {updateFlags} from '../../../redux/healthFlags'
import {connect} from 'react-redux'
import './Dashboard.css'

import DashNav from './DashTopNav'
import dashboardrouter from '../dashboardrouter'
import DashSideNav from './DashSideNav'
import { async } from 'q';



class Dashboard extends Component{
  componentDidMount = async() => {
    await this.handleGetUser()
    this.handleGetFlags()
  }

  handleGetUser =() =>{
    axios
    .get('/auth/user')
    .then((res) => {
      //then sends the res data to the state on refresh of the page
      this.props.updateUser(res.data) 
    })
    .catch((err) =>
      {this.props.history.push('/')}
    )
  }

  handleGetFlags =() =>{
    axios
    .post('/api/getHealthFlags', {ownerId: this.props.user.id})
    .then(res => {
      this.props.updateFlags(res.data[0])
    })
    .catch((err) =>
      console.log(err)
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
          {/* {this.props.loading.loadStatus ? (<div><img src='https://cdn.dribbble.com/users/92954/screenshots/4006601/4-cow-3.gif' alt=''/>></div>):(<div></div>)} */}
        </div>
      </div>
    </>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps, {updateUser, updateFlags})(Dashboard)