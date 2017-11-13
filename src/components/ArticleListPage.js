import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'
import { Link } from 'react-router-dom'
import PaginationList from './PaginationList'
import TagList from './TagList'
import ArticleRow from './ArticleRow'
import api from '../api'

const stateToProps = ({ articles, commons }) => ({ articles, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticles }, dispatch)

class ArticlesPage extends Component {

  state = { tags: [] }

  componentDidMount () {
    this.props.fetchGlobalArticles()

    // GET TAG LIST
    api.Tags.all()
      .then(response => this.setState({ tags: response.data.tags }))
      .catch(error => console.log(error))
  }

  render () {
    if (this.props.commons.appLoading) {
      return (
        <div className="ui active centered inline loader"></div>
      )
    }
    const articles = this.props.articles.map(article => {
      return (
        <ArticleRow key={article.slug} article={article} />
      )
    })
    return (
      <div>
        <div className='ui two column stackable grid'>
          <div className='twelve wide column'>
            {articles}
          </div>
          <div className='four wide column'>
            <TagList tags={this.state.tags} />
          </div>
        </div>
        <div className='ui grid'>
          <div className='column'>
            <PaginationList />
          </div>
        </div>
      </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticlesPage)