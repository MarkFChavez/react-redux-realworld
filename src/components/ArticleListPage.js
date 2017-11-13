import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'
import { Link } from 'react-router-dom'
import PaginationList from './PaginationList'

const stateToProps = ({articles, commons}) => (
  { articles, commons }
)

const dispatchToProps = dispatch => {
  return bindActionCreators({ fetchGlobalArticles }, dispatch)
}

class ArticlesPage extends Component {

  componentDidMount () {
    this.props.fetchGlobalArticles()
  }

  renderTagList (list) {
    const tags = list.map(item => {
      return <div key={item} className='ui tag label'> {item} </div>
    })

    if (list.length > 0) {
      return (
        <div style={{ marginTop: '20px' }}>
          {tags}
        </div>
      )
    }

    return null
  }

  render () {
    if (this.props.commons.appLoading) {
      return (
        <div class="ui active centered inline loader"></div>
      )
    }

    const articles = this.props.articles.map(article => {
      return (
        <div key={article.slug} className="ui green segment">
          <img className='ui left floated image' src={article.author.image} width={64} height={64} />
          <div className='ui right floated'>
            <div className='ui medium header'>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </div>
            <p> {article.description} </p>
            <div>
              <i className="like icon"></i> {article.favoritesCount} favorites
            </div>
            {this.renderTagList(article.tagList)}
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
      )
    })

    return (
      <div>
        {articles}

        <PaginationList />
      </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticlesPage)