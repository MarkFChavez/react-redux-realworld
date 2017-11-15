import React, { Component } from 'react'
import ArticleItem from '../components/ArticleItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticle, unsetArticle } from '../actions'

class ArticlePreviewContainer extends Component {

  componentDidMount () {
    const { slug } = this.props.match.params
    this.props.fetchArticle(slug)
  }

  componentWillUnmount () {
    this.props.unsetArticle()
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
const dispatchToProps = dispatch => {
  return bindActionCreators({
    fetchArticle,
    unsetArticle
  }, dispatch)
}


export default connect(stateToProps, dispatchToProps)(ArticlePreviewContainer)