import React from 'react'
import { markdown } from 'markdown'

const ArticleItemPage = ({ article }) => {
  const innerHtml = { __html: markdown.toHTML(article.body) }
  return (
    <div className='ui segment'>
      <div className='ui huge header'>{article.title}</div>
      <p dangerouslySetInnerHTML={innerHtml}>
      </p>
      <div>
        <img alt='' src={article.author.image} width={32} height={32} />
        &nbsp;
        created by <a>{article.author.username}</a> {article.createdAt}
      </div>
    </div>
  )
}

export default ArticleItemPage