import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList'
import { fetchGlobalArticles } from '../actions'

const stateToProps = ({ articles, commons }) => ({ articles, commons })
const dispatchToProps = dispatch => bindActionCreators({ fetchGlobalArticles }, dispatch)

class ArticlesContainer extends Component {

  componentDidMount () {
    this.props.fetchGlobalArticles()
    // GET TAG LIST
    // api.Tags.all()
    //   .then(response => this.setState({ tags: response.data.tags }))
    //   .catch(error => console.log(error))
  }

  render () {
    if (this.props.commons.appLoading) {
      return (
        <div className="ui active centered inline loader"></div>
      )
    }

    return (
      <div>
        <ArticleList articles={this.props.articles} />
      </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(ArticlesContainer)