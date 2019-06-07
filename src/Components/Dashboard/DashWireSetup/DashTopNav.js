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
      <h1>Moola</h1>
      <h1>We Heart {this.props.ranch}</h1>
      <h1>{this.props.firstName} {this.props.lastName}</h1>
      <Icon.User size={30} onClick={this.handleDropDown}/>
      
      {this.state.userDropDown ? (<div><button onClick={this.handleLogOut}>Log Out</button></div>): (<div></div>) }
      

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