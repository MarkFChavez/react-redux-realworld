import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGlobalArticles } from '../actions'

const stateToProps = state => ({ articlesCount: state.commons.articlesCount })
const dispatchToProps = dispatch => (
  bindActionCreators({ fetchGlobalArticles }, dispatch)
)

class PaginationList extends Component {

  getPage (page) {
    // set selected page
    this.props.fetchGlobalArticles(page)
  }

  renderPagination (total) {
    const numberOfPages = (total % 20) ? (total / 20) + 1 : (total / 20)
    const links = [...Array(numberOfPages).keys()].map(num => {
      const actual = num + 1
      const page = (actual - 1) * 10
      return (
        <a key={num} className={`item`} onClick={() => this.getPage(page)}> {actual} </a>
      )
    })

    return (
      <div className='ui link horizontal huge list'>
        {links}
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderPagination(this.props.articlesCount)}
      </div>
    )
  }

}

export default connect(stateToProps, dispatchToProps)(PaginationList)