import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticle, unsetArticle } from '../actions'
import { markdown } from 'markdown'

const stateToProps = ({ article, commons }) => ({ article, commons })
const dispatchToProps = dispatch => {
  return bindActionCreators({
    fetchArticle,
    unsetArticle
  }, dispatch)
}

class ArticleItemPage extends Component {

  componentDidMount () {
    const { slug } = this.props.match.params
    this.props.fetchArticle(slug)
  }

  componentWillUnmount () {
    this.props.unsetArticle()
  }

  render () {
    const { article } = this.props
    if (this.props.commons.appLoading || !article) {
      return (
        <div className='ui active centered inline loader'></div>
      )
    }

    const innerHtml = { __html: markdown.toHTML(article.body) }
    return (
      <div className='ui segment'>
        <div className='ui huge header'>{article.title}</div>
        <p dangerouslySetInnerHTML={innerHtml}>
        </p>
        <div>
          <img src={article.author.image} width={32} height={32} />
          &nbsp;
          created by <a href='#'>{article.author.username}</a> {article.createdAt}
        </div>
      </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticleItemPage)