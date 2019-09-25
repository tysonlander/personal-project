import React, { Component } from 'react'
import * as Icon from 'react-feather'
import axios from 'axios'


class CowTableRow extends Component {
  constructor() {
    super()
    this.state = {
      editMode: false,
      rfid: '',
      breed: '',
      gender: '',
      purchasePrice: '',
      location: ''
    }
  }

  handleDeleteCombo = () => {
    axios
      .delete(`/api/cow/${this.props.cowItem.id}`)
      .then(res => {
        alert(`Cow with RFID# ${this.props.cowItem.rfid}, has been deleted.`)
        this.props.handleRopeCows()
      })
      .catch(err => {
        if (err) throw err
      })
  }

  handleSubmitCowUpdate = () => {
    let updatedMilkCow = {
      rfid: this.state.rfid,
      breed: this.state.breed,
      gender: this.state.gender,
      purchasePrice: this.state.purchasePrice,
      location: this.state.location
    }
    axios
      .put(`/api/editCow/${this.props.cowItem.id}`, updatedMilkCow)
      .then(res => {
        this.handleCancel();
        this.props.handleRopeCows()
      })
      .catch((err) => {
        if (err) throw err
      })
  }

  handleCancel = () => {
    this.setState({
      editMode: !this.state.editMode,
      rfid: '',
      breed: '',
      gender: '',
      purchasePrice: '',
      location: ''
    })
  }

  handleStartEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
      rfid: this.props.cowItem.rfid,
      breed: this.props.cowItem.breed,
      gender: this.props.cowItem.gender,
      purchasePrice: this.props.cowItem.purchase_price,
      location: this.props.cowItem.location
    })
  }

  handleUpdateCowInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        {this.state.editMode ?
          (<>
            <tr>
              <td><input
                type='number'
                name='rfid'
                placeholder={this.props.cowItem.rfid}
                onChange={this.handleUpdateCowInfo}
              /></td>
              <td><input
                type='text'
                name='breed'
                placeholder={this.props.cowItem.breed}
                onChange={this.handleUpdateCowInfo}
              /></td>
              <td><input
                type='text'
                name='gender'
                placeholder={this.props.cowItem.gender}
                onChange={this.handleUpdateCowInfo}
              /></td>
              <td><input
                type='number'
                name='purchasePrice'
                placeholder={this.props.cowItem.purchase_price}
                onChange={this.handleUpdateCowInfo}
              /></td>
              <td><input
                type='text'
                name='location'
                placeholder={this.props.cowItem.location}
                onChange={this.handleUpdateCowInfo}
              /></td>
              <td>
                <Icon.Save className='icon' size={20} onClick={this.handleSubmitCowUpdate} />
                <Icon.XCircle className='icon' size={20} onClick={this.handleCancel} />
              </td>
            </tr>
          </>
          ) : (
            <>
              <tr>
                <td>{this.props.cowItem.rfid}</td>
                <td>{this.props.cowItem.breed}</td>
                <td>{this.props.cowItem.gender}</td>
                <td>{this.props.cowItem.purchase_price}</td>
                <td>{this.props.cowItem.location}</td>
                <td>
                  <Icon.Edit3 className='icon' size={20} onClick={this.handleStartEdit} />
                  <Icon.Trash2 className='icon' size={20} onClick={this.handleDeleteCombo} />
                </td>
              </tr>
            </>)}




      </>
    )
  }
}

export default CowTableRow