import React, {Component} from 'react'

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
      <div>
        <button onClick={this.handleDisplayLogin}>Login</button>
        <button onClick={this.handleDisplayRegister}>Register</button>
        {this.state.login ? 
          (<div><LoginForm/></div>) : 
          (<div><RegisterForm/></div>)}
        
        
        
      </div>
    )
  }
}

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps, {updateUser})(Login)

export default Login
