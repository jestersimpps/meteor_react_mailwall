import React from 'react';

export class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <div className="topinfo">
          <h3 className="black-text">
            <a target="_blank" href={this.props.post.url}>{this.props.post.title}</a>
          </h3>
        </div>

        <a target="_blank" href="" className="text-center">
          <img src={this.props.post.img[0]}/>
        </a>

        <div className="subject">
          {this.props.post.subject}
        </div>

        <div className="description black-text">
          {this.props.post.description}
        </div>
      </div>
    )
  }
}
