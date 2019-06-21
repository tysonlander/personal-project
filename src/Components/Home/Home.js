import React, {Component} from 'react'
import HomeNav from './HomeNav'
import './Home.css'

class Home extends Component {
  render(){
    return(
      <div>
        <HomeNav/>
          {/* <img alt='' src='https://moolapics.s3-us-west-1.amazonaws.com/fuzzycow.jpg'/> */}
          <div className='content'>
            <div className='slider-wrapper'>
              We help
              <div className='slider'>
                <div className='slider-text1'>put the MOO in your MOOLA.</div>
                <div className='slider-text2'>improve herd health.</div>
                <div className='slider-text3'>grow your farm.</div>
              </div>
            </div>
          </div>

          {/* https://moolapics.s3-us-west-1.amazonaws.com/nosepicker.jpg
          https://moolapics.s3-us-west-1.amazonaws.com/hellocow.jpg
          https://moolapics.s3-us-west-1.amazonaws.com/sunnycow.jpg */}

        {/* <div className='benefits-box'>

          
          <h1 className='benefits-text'>We help you 
            <div className='slider'>
              <span className='call-one'>increase profits.</span>
              <span className='call-two'>improve herd health.</span>
              <span className='call-three'>grow your farm.</span>
            </div>
          </h1>
          
        </div> */}
      </div>
    )
  }
}

export default Home