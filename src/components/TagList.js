import React, { Component } from 'react'
class TagList extends Component {

  render () {
    const tags = this.props.tags.map(tag => {
      return (
        <a key={tag} className='ui label'> {tag} </a>
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

}

export default TagList