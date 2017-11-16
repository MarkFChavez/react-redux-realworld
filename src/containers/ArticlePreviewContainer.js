import React, { Component } from 'react'
import ArticleItem from '../components/ArticleItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticle } from '../actions'

class ArticlePreviewContainer extends Component {

  componentDidMount () {
    this.props.fetchArticle(this.props.match.params.slug)
  }

  render () {
    if (this.props.commons.appLoading || !this.props.article) {
      return (
        <div className='ui active centered inline loader'></div>
      )
    }

    return (
      <div className='article-preview--container'>
        <ArticleItem article={this.props.article} />
      </div>
    )
  }

}

const stateToProps = ({ article, commons }) => ({ article, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchArticle }, dispatch)

export default connect(stateToProps, dispatchToProps)(ArticlePreviewContainer)