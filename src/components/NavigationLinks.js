import React from 'react'
import { Link } from 'react-router-dom'

const renderNavigationLinks = isLoggedIn => {
  if (isLoggedIn) {
    return (
      <div className='right menu'>
        <Link to='/' className='item'>Home</Link>
        <a className='item'>Logout</a>
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

const NavigationLinks = props => renderNavigationLinks(props.isLoggedIn)

export default NavigationLinks