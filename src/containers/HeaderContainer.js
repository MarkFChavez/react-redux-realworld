import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  renderNavigationLinks (isLoggedIn) {
    if (isLoggedIn) {
      return (
        <div className='right menu'>
          <Link to='/' className='item'>Home</Link>
          <Link to='/' className='item'>Logout</Link>
        </div>
      )
    }

    return (
      <div className='right menu'>
        <Link to='/' className='item'>Home</Link>
        <Link to='/signin' className='item'>Sign in</Link>
        <Link to='/signup' className='item'>Sign up</Link>
      </div>
    )
  }

  render () {
    return (
      <div className='ui stackable menu'>
        <div className='item'>
          <Link to='/' className='Header__text'>
            <h1> {this.props.title} </h1>
          </Link>
        </div>

        {this.renderNavigationLinks(this.props.isLoggedIn)}
      </div>
    )
  }
}

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool
}

const stateToProps = state => (
  { isLoggedIn: state.auth.isLoggedIn }
)

export default connect(stateToProps)(HeaderContainer)