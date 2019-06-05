import React, {Component} from 'react'


import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


class Login extends Component {
  // componentDidMount()

  render(){
    return(
      <div>
        <LoginForm/>
        <RegisterForm/>
        
      </div>
    )
  }
}

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps, {updateUser})(Login)

export default Login
