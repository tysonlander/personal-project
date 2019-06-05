import React, {Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



class DashNav extends Component {
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
    <>
      <h1>We Heart {this.props.ranch}</h1>
      <h1>{this.props.firstName} {this.props.lastName}</h1>
      <button onClick={this.handleLogOut}>Log Out</button>
    </>
    
    )
  }
}

function mapStateToProps(reduxState){
  return {
    firstName: reduxState.firstName,
    lastName: reduxState.lastName,
    ranch: reduxState.ranch,
  }
}

export default withRouter(connect(mapStateToProps)(DashNav))