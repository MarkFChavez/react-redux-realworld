import React from 'react'
import { Link } from 'react-router-dom'

const renderTagList = list => {
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

const ArticleRow = ({ article }) => (
  <div className="ui green segment">
    <img className='ui left floated image' src={article.author.image} width={64} height={64} />
    <div className='ui right floated'>
      <div className='ui medium header'>
        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
      </div>
      <p> {article.description} </p>
      <div>
        <i className="like icon"></i> {article.favoritesCount} favorites
      </div>
      {renderTagList(article.tagList)}
    </div>
    <div style={{ clear: 'both' }}></div>
  </div>
)

export default ArticleRow