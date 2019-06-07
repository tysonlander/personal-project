import React, {Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './DashTopNav.css'



class DashTopNav extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  handleLogOut = () => {
    axios
      .get('/auth/logout')
      .then((res) => {
        this.props.history.push('/')
      })


  }

  render(){
    
    return(
    <div className='dash-top-nav'>
      <h1>Moola</h1>
      <h1>We Heart {this.props.ranch}</h1>
      <h1>{this.props.firstName} {this.props.lastName}</h1>
      <button onClick={this.handleLogOut}>Log Out</button>
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