import React, {Component} from 'react'
// import axios from 'axios'
// import {connect} from 'react-redux'

import LoginForm from './LoginForm'


class Login extends Component {
  // componentDidMount()

  render(){
    return(
      <div>
        <LoginForm/>
      </div>
    )
  }
}

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps, {updateUser})(Login)

export default Login
