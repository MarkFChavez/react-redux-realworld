import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PaginationList from './PaginationList'
import TagList from './TagList'
import ArticleRow from './ArticleRow'
import api from '../api'

const ArticleList = props => {
  const articles = props.articles.map(article => {
    return <ArticleRow key={article.slug} article={article} />
  })

  return (
    <div>
      <div className='ui two column stackable grid'>
        <div className='twelve wide column'>
          {articles}
        </div>
        {/* <div className='four wide column'>
          <TagList tags={this.state.tags} />
        </div> */}
      </div>
      <div className='ui grid'>
        <div className='column'>
          <PaginationList />
        </div>
      </div>
    </div>
  )
}

export default ArticleList