import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticlesByTag } from '../actions'

const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticlesByTag }, dispatch)

class TagList extends Component {

  tagClick (tag) {
    this.props.fetchGlobalArticlesByTag(tag)
  }

  render () {
    const tags = this.props.tags.map(tag => {
      return (
        <a key={tag} className='ui label' onClick={() => this.tagClick(tag)}> {tag} </a>
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

export default connect(null, dispatchToProps)(TagList)