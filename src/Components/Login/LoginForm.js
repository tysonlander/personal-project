import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { updateUser } from '../../redux/userReducer'
import { connect } from 'react-redux'


class LoginForm extends Component {
  constructor() {
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
    const { email, password } = this.state
    axios.post('/auth/login', { email, password })
      .then((res) => {
        this.props.updateUser(res.data) // this send the res data to the state so for this user session
        // console.log(res.data) 
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
    e.target.email.value = ''
    e.target.password.value = ''
  }

  render() {
    return (
      <div className='authentication-page'>
        <section className='row-one'>
          <div className='box-title'>
            <h1 className='title-one'>Login</h1>
          </div>
          <div className='input-box'>
            <div className='guest-login-callout'>
              <h5>If you would like to login as a guest use:</h5>
              <h5><span className='bold-title'>EMAIL:</span> awesomerancher@gmail.com <br /><span className='bold-title'>PASSWORD:</span> t</h5>
            </div>
            <form onSubmit={this.handleUserLogin}>
              <input
                type='text'
                name='email'
                placeholder='Email'
                onChange={this.handleLoginInfoUpdate}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleLoginInfoUpdate}
              />
              <button className='butn-primary first-button'>Login</button>
              <h2 className='paragraph-small'>Don't have an account?</h2>
              <button className='butn-secondary' onClick={() => this.props.history.push('/register')}>Register</button>
            </form>
          </div>
        </section>
      </div >
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default withRouter(connect(mapStateToProps, { updateUser })(LoginForm))

