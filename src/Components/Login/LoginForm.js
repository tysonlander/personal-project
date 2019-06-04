import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLoginInfoUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUserLogin = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    axios.post('/auth/login', {email, password})
      .then((res) => {
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
    e.target.email.value = ''
    e.target.password.value = ''
  }

  render(){
    return(
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleUserLogin}>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={this.handleLoginInfoUpdate}
          />
          <input
            type='text'
            name='password'
            placeholder='Password'
            onChange={this.handleLoginInfoUpdate}
          />
          <button>Log In</button>
        </form>
      </>
    )
  }
}

export default withRouter(LoginForm)