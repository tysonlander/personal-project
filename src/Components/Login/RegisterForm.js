import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { updateUser } from '../../redux/userReducer'
import { connect } from 'react-redux'

class RegisterForm extends Component {
  constructor() {
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
    const { firstName, lastName, ranch, email, password } = this.state
    axios
      .post('/auth/register', { firstName, lastName, ranch, email, password })
      .then((res) => {
        this.props.updateUser(res.data)
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

  render() {
    return (
      <div className='authentication-page'>
        {/* <HomeNav/> */}

        <section className='row-one'>
          <div className='box-title'>
            <h1 className='title-one'>Register</h1>
          </div>
          <div className='input-box'>
            <div className='guest-login-callout'>
              <h5>If you would like to login as a guest use:</h5>
              <h5><span className='bold-title'>EMAIL:</span> awesomeranch9@gmail.com <br /><span className='bold-title'>PASSWORD:</span> t</h5>
            </div>
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
              <button className='butn-primary first-button'>Register</button>
              <h2 className='paragraph-small'>Already Have an Account?</h2>
              <button className='butn-secondary' onClick={() => { this.props.history.push('/login') }}>Login</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default withRouter(connect(mapStateToProps, { updateUser })(RegisterForm))