import React, { Component } from 'react'
// import styled from 'styled-components'
// import {SignUpToggle, LoginBox, LoginContainer} from './LoginStyled'
import HomeNav from '../Home/HomeNav'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      login: false
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




  render() {
    return (
      <div className='authentication-page'>
        {/* <HomeNav/> */}

        <section className='row-one'>
          <div className='box-title'>
            {this.state.login ?
              (<div><h1 className='title-one'>Login</h1></div>) :
              (<div><h1 className='title-one'>Register</h1></div>)}
          </div>
          {this.state.login ?
            (<div><LoginForm handleDisplayRegister={this.handleDisplayRegister} /></div>) :
            (<div><RegisterForm handleDisplayLogin={this.handleDisplayLogin} /></div>)}
        </section>
      </div>
    )
  }
}

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps, {updateUser})(Login)

export default Login


