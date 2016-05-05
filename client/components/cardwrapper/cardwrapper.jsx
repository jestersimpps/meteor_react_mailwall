import React from 'react';
import {CardHeader} from './cardheader.jsx';
import {CardFooter} from './cardfooter.jsx';
import {ArticleCard} from './card_types/articlecard.jsx';
import {YoutubeCard} from './card_types/youtubecard.jsx';
import {ImageCard} from './card_types/imagecard.jsx';

export class CardWrapper extends React.Component {

  render() {

    let postColor = "blue darken-2";
    let card = <ArticleCard post={this.props.post}/>;

    switch (this.props.post.site_name) {
      case "YouTube":
        postColor = "red darken-3";
        card = <YoutubeCard post={this.props.post}/>;
        break;
      case "img":
        postColor = "green darken-1";
        break;
    }

    return (
      <div>
        <CardHeader postColor={postColor} post={this.props.post}/>
        {card}
        <CardFooter postColor={postColor} post={this.props.post}/>
      </div>
    )
  }
}
