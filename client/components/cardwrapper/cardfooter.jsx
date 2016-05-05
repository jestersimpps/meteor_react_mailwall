import React from 'react';

export class CardFooter extends React.Component {

  clickUpVote() {}
  clickDownVote() {}
  clickComments() {}

  render() {

    return (
      <div className={'brickfooter '+this.props.postColor}>
        <button className="downvotes white red-text" onClick={this.clickDownVote.bind(this)}>
          {this.props.post.downvotes}
          <i className="fa fa-thumbs-down"></i>
        </button>
        <button className="upvotes white green-text" onClick={this.clickUpVote.bind(this)}>
          {this.props.post.upvotes}
          <i className="fa fa-thumbs-up"></i>
        </button>
        <button className="commentsbutton white pull-right black-text" onClick={this.clickComments.bind(this)}>
          <i className="fa fa-comments"></i>
          {this.props.post.comments}
          Comments
        </button>
      </div>
    )
  }
}
