import React from 'react'
import PropTypes from 'prop-types'
import ArticleRow from './ArticleRow'

const ArticleList = props => {
  const articles = props.articles.map(article => {
    return <ArticleRow key={article.slug} article={article} />
  })

  return (
    <div className='article--list'> {articles} </div>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList