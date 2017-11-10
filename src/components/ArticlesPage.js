import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'

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
              <a className="readmore">
                read more...
              </a>

              <a className="like">
                <i className="like icon"></i> {article.favoritesCount} favorites
              </a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='ui feed'> {articles} </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticlesPage)