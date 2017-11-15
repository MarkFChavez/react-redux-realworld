import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList'
import TagList from '../components/TagList'
import { fetchGlobalArticles, fetchTags } from '../actions'
import api from '../api'

class ArticlesContainer extends Component {

  componentDidMount () {
    this.props.fetchGlobalArticles()
    this.props.fetchTags()
  }

  render () {
    if (this.props.commons.appLoading) {
      return <div className="ui active centered inline loader"></div>
    }

    return (
      <div className='ui two column stackable grid articles--container'>
        <div className='twelve wide column'>
          <ArticleList articles={this.props.articles} />
        </div>

        <div className='four wide column'>
          <TagList tags={this.props.tags} />
        </div>
      </div>
    )
  }

}

const stateToProps = ({ articles, tags, commons }) => ({ articles, tags, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticles, fetchTags }, dispatch)

export default connect(stateToProps, dispatchToProps)(ArticlesContainer)