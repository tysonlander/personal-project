import React, {Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './DashTopNav.css'
import * as Icon from 'react-feather'



class DashTopNav extends Component {
  constructor(){
    super()
    this.state = {
      userDropDown: false
    }
  }

  handleLogOut = () => {
    axios
      .get('/auth/logout')
      .then((res) => {
        this.props.history.push('/')
      })


  }

  handleDropDown = () => {
    this.setState({
      userDropDown: !this.state.userDropDown
    })
  }

  render(){
    return(
    <div className='dash-top-nav'>
      <div className='dash-top-nav-1'>
        <img src='https://moolapics.s3-us-west-1.amazonaws.com/cowbell.jpg' alt='' className='nav-logo-icon'/>
        <img src='https://moolapics.s3-us-west-1.amazonaws.com/logo+screenshot.JPG' alt='logo' className='nav-logo-name' />
        <div className='dash-top-nav-1b'>
          <h4 className='dash-top-nav-1b-text'>We</h4>
          <Icon.Heart size={20} fill='#2AD2C4' stroke='none'/> 
          <h4 className='dash-top-nav-1b-text'>{this.props.ranch}</h4>

        </div>
      </div>
      <div className='dash-top-nav-2'>
        <h4 className='dash-top-nav-1b-text'>{this.props.firstName} {this.props.lastName}</h4>
        <Icon.User size={30} onClick={this.handleDropDown}/>

        {this.state.userDropDown ? (<div><button onClick={this.handleLogOut}>Log Out</button></div>): (<div></div>) }
      </div>
      

    </div>
    
    )
  }
}

function mapStateToProps(reduxState){
  return {
    firstName: reduxState.user.firstName,
    lastName: reduxState.user.lastName,
    ranch: reduxState.user.ranch,
  }
}

export default withRouter(connect(mapStateToProps)(DashTopNav))