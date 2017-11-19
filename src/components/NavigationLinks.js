import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigationLinks = props => {
  if (props.currentUser) {
    return (
      <div className='right menu'>
        <Link to='/' className='item'>Home</Link>
        <Link to='/profile' className='item'>{props.currentUser.username}</Link>
        <a className='item' onClick={props.onLogout}>Logout</a>
      </div>
    )
  }

  return (
    <div className='right menu'>
      <Link to='/' className='item'>Home</Link>
      <Link to='/signin' className='item'>Sign in</Link>
      {/* <Link to='/signup' className='item'>Sign up</Link> */}
    </div>
  )
}

NavigationLinks.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func
}

export default NavigationLinks