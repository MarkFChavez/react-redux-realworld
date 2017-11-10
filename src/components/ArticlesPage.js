import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'
import { Link } from 'react-router-dom'

const stateToProps = state => (
  { articles: state.articles }
)

const dispatchToProps = dispatch => {
  return bindActionCreators({ fetchGlobalArticles }, dispatch)
}

class ArticlesPage extends Component {

  componentDidMount () {
    this.props.fetchGlobalArticles()
  }

  render () {
    const articles = this.props.articles.map(article => {
      return (
        <div key={article.slug} className="event">
          <div className="label">
            <img src={article.author.image} />
          </div>
          <div className="content">
            <div className="summary">
              <a>{article.author.username}</a> posted on the page.
            </div>
            <div className="extra text">
              {article.description}
            </div>
            <div className="meta">
              <Link to={`/articles/${article.slug}`} className="readmore">
                read more...
              </Link>
              <a className="like">
                <i className="like icon"></i> {article.favoritesCount} favorites
              </a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='ui large feed'> {articles} </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticlesPage)