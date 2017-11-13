import React, { Component } from 'react'

const TagList = props => {
  const tags = props.tags.map(tag => {
    return (
      <a className='ui label'> {tag} </a>
    )
  })

  return (
    <div className='ui black segment'>
      <div className='ui tag labels'>
        <div className='ui header'> Tags </div>
        {tags}
      </div>
    </div>
  )
}

export default TagList