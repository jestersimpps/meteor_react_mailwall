import React from 'react';
import {CardHeader} from './cardheader.jsx';
import {CardFooter} from './cardfooter.jsx';
// import {CardWrapper} from '../cardwrapper/cardwrapper.jsx';


export class CardWrapper extends React.Component {

  render() {
    // postcolor
    let postColor = "blue darken-2";
    switch (this.props.post.site_name) {
      case "YouTube":
        postColor = "red darken-3";
        break;
      case "img":
        postColor = "green darken-1";
        break;
    }

    return (
      <div>
        <CardHeader postColor={postColor} post={this.props.post} />
        <CardFooter postColor={postColor} post={this.props.post} />
      </div>
    )
  }
}
