import React, { Component } from 'react'
import ArticleRow from './ArticleRow'

const ArticleList = props => {
  const articles = props.articles.map(article => {
    return <ArticleRow key={article.slug} article={article} />
  })

  return (
    <div className='article--list'> {articles} </div>
  )
}

export default ArticleList