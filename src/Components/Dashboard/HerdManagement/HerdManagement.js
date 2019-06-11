import React, {Component} from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';
import CowTableRow from './CowTableRow'
import {updateLoading} from '../../../redux/loadingReducer'


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
  this.props.updateLoading({loadStatus: true})  // this isn't working
  axios.post('/api/cows/', {id: this.props.id})
  .then(res => {
    this.setState({
      cows: res.data
    })
  })
  this.props.updateLoading({loadStatus: false}) // it isn't working
}


  
  render(){
    let cowList = this.state.cows.map((element, index) => {
      return(
        <CowTableRow cowItem={element}
          key={index}
          handleRopeCows={this.handleRopeCows}
        />
      )
    })

/////////////////////////////////////// can probably remove the below
    console.log(this.props.loadStatus)
    return(
      <div>
        {this.props.loadStatus ? (<div><img src='https://cdn.dribbble.com/users/92954/screenshots/4006601/4-cow-3.gif' alt=''/>></div>):(<div></div>)}
        <div className='page-header'>
          <h1>Manage Herd</h1>
          <hr></hr>
        
        </div>
          <button><Link to='/dashboard/AddToHerd'>Add Cow</Link></button>
        
        
        {/* {mappedCows} */}

        <table>
          <thead>
            <tr>
              <th>RFID</th>
              <th>Breed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {cowList}
          </tbody>
        </table>
        
      </div>
      
      )
  }
}

function mapStateToProps(reduxState) {
  return {
    id: reduxState.user.id,
    loadStatus: reduxState.loading.loadStatus
  }
}

export default connect(mapStateToProps, {updateLoading})(HerdManagement)

