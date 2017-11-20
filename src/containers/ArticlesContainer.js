import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList'
import TagList from '../components/TagList'
import Pagination from '../components/commons/Pagination'
import { fetchGlobalArticles, fetchFeedArticles, fetchTags } from '../actions'

class ArticlesContainer extends Component {

  constructor (props) {
    super(props)

    this.onPageClick = this.onPageClick.bind(this)
    this.onTagClick = this.onTagClick.bind(this)

    // local component state
    this.state = {
      selectedTag: '',
      selectedPage: 0,
      selectedTab: 'global_feed'
    }
  }

  componentDidMount () {
    this.props.fetchGlobalArticles()
    this.props.fetchTags()
  }

  onPageClick (page) {
    this.setState({ selectedPage: page })
    this.props.fetchGlobalArticles(page, this.state.selectedTag)
  }

  onTagClick (tag) {
    const firstPage = 0
    this.props.fetchGlobalArticles(firstPage, tag)
    this.setState({ selectedTag: tag })
  }

  setGlobalTab (tab) {
    this.setState({ selectedTab: tab })
    this.props.fetchGlobalArticles(this.state.selectedPage)
  }

  setYourTab (tab) {
    this.setState({ selectedTab: tab })
    this.props.fetchFeedArticles(this.state.selectedPage)
  }

  renderArticles () {
    return (
      <div>
        <div className='ui secondary pointing menu'>
          <a
            className={`item ${this.state.selectedTab === 'global_feed' ? 'active' : ''}`}
            onClick={() => this.setGlobalTab('global_feed')}>
            Global Feed
          </a>
          <a
            className={`item ${this.state.selectedTab === 'your_feed' ? 'active' : ''}`}
            onClick={() => this.setYourTab('your_feed')}>
            Your Feed
          </a>
        </div>
        <ArticleList articles={this.props.articles} />
      </div>
    )
  }

  render () {
    if (this.props.commons.appLoading) {
      return <div className="ui active centered inline loader"></div>
    }

    return (
      <div className='articles--container'>
        <div className='ui two column stackable grid'>
          <div className='twelve wide column'>
            {this.renderArticles()}
          </div>

          <div className='four wide column'>
            <TagList tags={this.props.tags} onTagClick={this.onTagClick} />
          </div>
        </div>

        <div className='ui grid'>
          <div className='column'>
            <Pagination current={this.state.selectedPage} count={this.props.commons.articlesCount} onPageClick={this.onPageClick} />
          </div>
        </div>
      </div>
    )
  }

}

const stateToProps = ({ articles, tags, commons }) => (
  { articles, tags, commons }
)

const dispatchToProps = dispatch => (
  bindActionCreators({ fetchGlobalArticles, fetchFeedArticles, fetchTags }, dispatch)
)

export default connect(stateToProps, dispatchToProps)(ArticlesContainer)