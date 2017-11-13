import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'
import { Link } from 'react-router-dom'
import PaginationList from './PaginationList'
import ArticleRow from './ArticleRow'

const stateToProps = ({ articles, commons }) => ({ articles, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticles }, dispatch)

class ArticlesPage extends Component {

  componentDidMount () {
    this.props.fetchGlobalArticles()
  }

  renderTagList (list) {
    if (!list) { return null }

    const tags = list.map(item => {
      return <div key={item} className='ui tag label'> {item} </div>
    })

    return (
      <div style={{ marginTop: '20px' }}>
        {tags}
      </div>
    )
  }

  render () {
    if (this.props.commons.appLoading) {
      return (
        <div class="ui active centered inline loader"></div>
      )
    }

    const articles = this.props.articles.map(article => {
      return (
        <ArticleRow key={article.slug} article={article} />
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