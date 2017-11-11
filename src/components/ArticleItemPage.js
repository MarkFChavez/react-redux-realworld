import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticle, unsetArticle } from '../actions'

const stateToProps = ({ article }) => ({ article })
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
    if (article) {
      return (
        <div class="ui sizer vertical segment">
          <div class="ui huge header">{article.title}</div>
          <p>{article.body}</p>

          <div>
            <img src={article.author.image} width={32} height={32} />
            &nbsp;
            created by <a href='#'>{article.author.username}</a> {article.createdAt}
          </div>
        </div>
      )
    }
    return null
  }

}

export default connect(stateToProps, dispatchToProps)(ArticleItemPage)