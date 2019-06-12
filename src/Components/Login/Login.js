import React, {Component} from 'react'
import styled from 'styled-components'
import {SignUpToggle, LoginBox, LoginContainer} from './LoginStyled'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      login: true
    }
  }
  
  // componentDidMount()
  handleDisplayLogin = () => {
    this.setState({
      login: true
    })
  }
  handleDisplayRegister = () => {
    this.setState({
      login: false
    })
  }




  render(){
    return(
      <LoginContainer>
        <LoginBox>
          <SignUpToggle onClick={this.handleDisplayLogin}>Login</SignUpToggle>
          <SignUpToggle onClick={this.handleDisplayRegister}>Register</SignUpToggle>
          {this.state.login ? 
            (<div><LoginForm/></div>) : 
            (<div><RegisterForm/></div>)}
          
          
          
        </LoginBox>
      </LoginContainer>
    )
  }
}

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps, {updateUser})(Login)

export default Login


