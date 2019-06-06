import React, {Component} from 'react'
import {connect } from 'react-redux'
import axios from 'axios';
import HerdToDisplay from './HerdToDisplay'

class HerdManagement extends Component {
  constructor(){
    super();
    this.state = {
      cows: []
    }
  }
  
  

componentDidMount(){
  this.handleRopeCows()
}

handleRopeCows = () => {
  axios.post('/api/cows/', {id: this.props.id})
  .then(res => {
    this.setState({
      cows: res.data
    })
  })
}
  
  render(){
    console.log("cows on state:", this.state.cows)
    const mappedCows = this.state.cows.map((element, i) => {
      return (
        <HerdToDisplay
          key={i}
          cow={element}
        />
      )
    })

    return(
      <div>
        <h1>Manage Herd</h1>
        {mappedCows}
      </div>
      
      )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps)(HerdManagement)

