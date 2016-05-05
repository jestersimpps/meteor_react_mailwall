import React from 'react';

export class CardHeader extends React.Component {

  clickLock() {}

  clickShare() {}

  clickRemove() {}

  render() {

    // postpublic
    let lockIcon = <i className="fa fa-lock"></i>;
    switch (this.props.post.public) {
      case 0:
        lockIcon = <i className="fa fa-unlock"></i>;
        break;
    }

    return (
      <div>
        <div className="typeindicator black white-text">
          <span className="from_mail">
            <i className="fa fa-user"></i>
            <a className="white-text" href={'mailto:'+this.props.post.from}>
              {' '}{this.props.post.from}</a>
          </span>
          <span className="date pull-right">
            <i className="fa fa-clock-o"></i>
            {' '}{this.props.post.created_at}
          </span>
        </div>

        <div className={'brickheader '+this.props.postColor}>
          <button className="lock white black-text" onClick={this.clickLock.bind(this)}>
            {lockIcon}
          </button>

          <button className="sharepost white blue-text" onClick={this.clickShare.bind(this)}>
            <i className="fa fa-share-alt"></i>
          </button>
          <button className="removepost white red-text pull-right" onClick={this.clickRemove.bind(this)}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    )
  }
}
