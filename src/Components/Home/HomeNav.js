import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
// import {connect } from 'react-redux'

class HomeNav extends Component {
  
  handleToRegister = () => {
    this.props.history.push('/login')
  }
  render(){
    return(
      <nav className='home-nav'>
        <div className='container-one'>
          <img src='https://moolapics.s3-us-west-1.amazonaws.com/cowbell-black.JPG' alt='bell-logo' className='home-nav-logobell' />
          <div className='vertical-line'></div>
          <img src='https://moolapics.s3-us-west-1.amazonaws.com/logo+screenshot.JPG' alt='logo' className='home-nav-logoname' />
        </div>
        <div className='container-two'>
          <button className='butn-primary' onClick={this.handleToRegister}>Register</button>
          <button className='butn-secondary' onClick={this.handleToRegister}>Login</button>
        </div>
      </nav>
    )
  }
}

export default withRouter(HomeNav)