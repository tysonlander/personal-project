import React, {Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'


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
    return(<button onClick={this.handleLogOut}>Log Out</button>)
  }
}

export default withRouter(DashNav)