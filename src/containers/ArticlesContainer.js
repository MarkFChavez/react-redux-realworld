import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList'
import TagList from '../components/TagList'
import { fetchGlobalArticles } from '../actions'
import api from '../api'

class ArticlesContainer extends Component {

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
      return <div className="ui active centered inline loader"></div>
    }

    return (
      <div className='ui two column stackable grid articles--container'>
        <div className='twelve wide column'>
          <ArticleList articles={this.props.articles} />
        </div>

        <div className='four wide column'>
          <TagList tags={this.state.tags} />
        </div>
      </div>
    )
  }

}

const stateToProps = ({ articles, commons }) => ({ articles, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticles }, dispatch)

export default connect(stateToProps, dispatchToProps)(ArticlesContainer)