import React, { Component } from 'react'
// import {socket} from '../../../socketHelper'
import io from 'socket.io-client'
import axios from 'axios'
import { connect } from 'react-redux'

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      userID: null,
      messages: [],
      newMessage: ''
    }
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on('new message', this.handleReceiveMessages);
    this.socket.on('welcome', this.setUserId);
    axios.get('/test').then(res => {
    });
  }

  setUserId = user => {
    this.setState(user);
  }

  handleSubmitMessage = (e) => {
    e.preventDefault()
    this.socket.emit('message sent', {
      message: this.state.newMessage,
      ranch: this.props.ranch
    })
    this.setState({ newMessage: '' })
  }

  handleMessageInput = e => {
    this.setState({ newMessage: e.target.value });
  };

  handleReceiveMessages = message => {
    const updatedMessages = this.state.messages.slice();
    updatedMessages.push(message);
    this.setState({
      messages: updatedMessages
    })
  }

  render() {
    const { messages, newMessage, userID } = this.state;
    const messagesToDisplay = messages.map((e, i) => {
      const styles =
        e.user === userID
          ? { alignSelf: 'flex-end', backgroundColor: '#2d96fb', color: 'white' }
          : { alignSelf: 'flex-start', backgroundColor: '#e5e6ea' }
      return (
        <p key={i} style={styles}>
          {e.ranch}: {e.message}
        </p>
      )
    })
    return (
      <div className='messages-page'>
        <div className='page-header'>
          <h1>Messages</h1>
          <hr></hr>
        </div>

        <div className="container">
          <div className='online-users'>
            <h3>Online Users</h3>
          </div>

          <div className='chat-area'>
            <div>{messagesToDisplay}</div>
            <form id='messageForm' onSubmit={this.handleSubmitMessage}>
              <div className='form-group'>
                <label>Enter Message</label>
                <br />
                <textarea
                  className='form-control'
                  id='message'
                  value={newMessage}
                  onChange={this.handleMessageInput}
                ></textarea>
                <br />
                <input
                  type='submit'
                  className='butn-two-primary'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>
      </div>



    )
  }
}

function mapStateToProps(reduxState) {
  return {
    ranch: reduxState.user.ranch,
  }
}

export default connect(mapStateToProps)(Messages)