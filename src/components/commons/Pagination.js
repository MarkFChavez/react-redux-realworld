import React from 'react'

const Pagination = props => {
  const numberOfPages = (props.count % 20) ? (props.count / 20) + 1 : (props.count / 20)
  const links = [...Array(Math.round(numberOfPages)).keys()].map(num => {
    if (num === props.current) {
      return (
        <span style={{ fontWeight: 'bolder' }} key={num} className='item'> {num + 1} </span>
      )
    }

    return (
      <a key={num} className='item' onClick={() => props.onPageClick(num)}> {num + 1} </a>
    )
  })

  return (
    <div className='ui celled horizontal huge list'>
      {links}
    </div>
  )
}

export default Pagination