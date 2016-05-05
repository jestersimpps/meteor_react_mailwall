import React from 'react';

export class ArticleCard extends React.Component {
  render() {
    return (
      <div>
        <div className="topinfo">
          <h3 className="black-text">
            <a target="_blank" href={post.url}>{post.title}</a>
          </h3>
        </div>

        <a target="_blank" href="" className="text-center">
          <img src={post.img[0]}/>
        </a>

        <div className="subject">
          {post.subject}
        </div>

        <div className="description black-text">
          {post.description}
        </div>
      </div>
    )
  }
}
