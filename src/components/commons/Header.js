import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => (
  <div className='ui stackable menu'>
    <div className='item'>
      <Link to='/' className='Header__text'>
        <h1> {props.title} </h1>
      </Link>
    </div>

    <div className='right menu'>
      <Link to='/' className='item'>Home</Link>
      <Link to='/signin' className='item'>Sign in</Link>
      <Link to='/signup' className='item'>Sign up</Link>
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header