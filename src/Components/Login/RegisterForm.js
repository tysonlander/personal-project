import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class RegisterForm extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '', 
      lastName: '', 
      ranch: '', 
      email: '', 
      password: ''
    }
  }

  handleUserRegister = (e) => {
    e.preventDefault()
    const {firstName, lastName, ranch, email, password} = this.state
    axios
      .post('/auth/register', {firstName, lastName, ranch, email, password})
      .then((res) => {
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
    e.target.firstName.value = ''
    e.target.lastName.value = ''
    e.target.ranch.value = ''
    e.target.email.value = ''
    e.target.password.value = ''
  }

  handleRegisterInfoUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleUserRegister}>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={this.handleRegisterInfoUpdate}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={this.handleRegisterInfoUpdate}
          />
          <input
            type='text'
            name='ranch'
            placeholder='Your Ranch Name'
            onChange={this.handleRegisterInfoUpdate}
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={this.handleRegisterInfoUpdate}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.handleRegisterInfoUpdate}
          />
          <button>Register</button>
        </form>
      </>
    )
  }
}

export default withRouter(RegisterForm)