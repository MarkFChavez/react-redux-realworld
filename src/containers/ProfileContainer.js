import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

  render () {
    if (this.props.currentUser) {
      const { id, email, username, bio, image } = this.props.currentUser

      return (
        <div className='ui centered raised green card'>
          <div className='image'>
            <img src={image} />
          </div>
          <div className='content'>
            <div className='header'>
              {username} ({id})
            </div>
            <div className='meta'>{email}</div>
            <div className='description'>
              {bio}
            </div>
          </div>
        </div>
      )
    }

    return null
  }

}

const stateToProps = state => (
  { currentUser: state.auth.currentUser }
)

export default connect(stateToProps)(ProfileContainer)