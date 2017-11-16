import React from 'react'

const TagList = props => {
  const tags = props.tags.map(tag => (
    <a key={tag} className='ui label' onClick={() => props.onTagClick(tag)}> {tag} </a>
  ))

  return (
    <div className='ui black segment tag--list'>
      <div className='ui tag labels'>
        <div className='ui header'> Tags </div>
        {tags}
      </div>
    </div>
  )
}

export default TagList