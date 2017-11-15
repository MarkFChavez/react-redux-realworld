import React from 'react'
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
      <a className='item' onClick={() => alert('work in progress')}>Sign in</a>
      <a className='item' onClick={() => alert('work in progress')}>Sign up</a>
    </div>
  </div>
)

export default Header