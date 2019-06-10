import React, {Component} from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';
import CowTableRow from './CowTableRow'


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
    let cowList = this.state.cows.map((element, index) => {
      return(
        <CowTableRow cowItem={element}
          key={index}
          handleRopeCows={this.handleRopeCows}
        />
      )
    })

/////////////////////////////////////// can probably remove the below

    return(
      <div>
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
    id: reduxState.user.id
  }
}

export default connect(mapStateToProps)(HerdManagement)

