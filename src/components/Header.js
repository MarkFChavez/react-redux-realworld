import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>
      <Link to='/'>
        Conduit - a medium clone.
      </Link>
    </h1>
    <div>
      ...developed by <a href='#'> @mrkjlchvz </a>
    </div>

    <hr />
  </div>
)

export default Header