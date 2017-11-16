import React from 'react'
import PropTypes from 'prop-types'

const Pagination = props => {
  const numberOfPages = (props.count % 20) ? (props.count / 20) + 1 : (props.count / 20)
  const links = [...Array(Math.round(numberOfPages)).keys()].map(num => {
    return (num === props.current)
      ? <span style={{ fontWeight: 'bolder' }} key={num} className='item'> {num + 1} </span>
      : <a key={num} className='item' onClick={() => props.onPageClick(num)}> {num + 1} </a>
  })

  return (
    <div className='ui celled horizontal huge list'>
      {links}
    </div>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired
}

export default Pagination