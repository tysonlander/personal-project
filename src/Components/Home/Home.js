import React, { Component } from 'react'
import HomeNav from './HomeNav'
import './Home.css'
import * as Icon from 'react-feather'


class Home extends Component {

  handleToRegister = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className='home-page'>
        <HomeNav />
        <div className='hero-main'>
          <div className='row-one'>
            <div className='box-one'>
              <h1 className='title-one'>More Data, More Dairy</h1>
              <button className='butn-secondary-white' onClick={this.handleToRegister}>Register</button>
            </div>
            <div className='box-two'>
              <img className='box-two-img' src='https://moolapics.s3-us-west-1.amazonaws.com/moola-application-sideview.png' alt='' />
            </div>
          </div>
          <br />
          <div className='row-two'>
            <h2>Learn More</h2>
            <Icon.ChevronDown size={30} stroke='#353539' />
          </div>
        </div>

        <section className='section-two'>
          <h2 className='title-mini'>what we're all about</h2>
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
        </section>

        <section className='section-three'>
          <div className='quote-box'>
            <p>"They really do put the moo in the moola. This has made my farm more profitable and has really simplified my dairy farm"</p>
            <h2>- future user</h2>
          </div>
        </section>

        <section className='section-four'>
          <div className='features-box'>
            <h2 className='title-two'>Reporting & Analytics</h2>
            <p className='paragraph-small'>Track your dairy production and your herds health stats. Know exactly how each cow's health is affecting dairy production.</p>
          </div>
          <div className='features-box'>
            <h2 className='title-two'>Custom Health Watch</h2>
            <p className='paragraph-small'>An ounce of prevention is worth more than a pound of cure. Get alerts if a cows health metrics fall outside your custom ranges.</p>
          </div>
          <div className='features-box'>
            <h2 className='title-two'>Farmer to Farmer</h2>
            <p className='paragraph-small'>Collaborate with our community of farmers to get advice and share the best dairy practices from your farm.</p>
          </div>
        </section>

        <section className='section-five'>
          <h2 className='title-mini'>Are you ready?</h2>
          <h1 className='title-one'>Start optimizing your farm today.</h1>
          <p className='paragraph-small'>Join the thousands of farms who trust Moola with their herds.</p>
          <button className='butn-secondary-white' onClick={this.handleToRegister}>Register</button>
        </section>

        <footer className='home-footer'>
          <p className='paragraph-small'>Looking to hire the amazing, talented, and super cool dev who created this? <br />Reach out: TysonLander@gmail.com</p>
          <p className='paragraph-small'>No cows were harmed in the making of this coding project.</p>
        </footer>






        {/* https://moolapics.s3-us-west-1.amazonaws.com/nosepicker.jpg
          https://moolapics.s3-us-west-1.amazonaws.com/hellocow.jpg
          https://moolapics.s3-us-west-1.amazonaws.com/sunnycow.jpg */}

      </div>
    )
  }
}

export default Home