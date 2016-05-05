import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {CardWrapper} from '../cardwrapper/cardwrapper.jsx';
import {SpringGrid, layout, measureItems, makeResponsive} from 'react-stonecutter';

// import {Posts} from '../../../collections/posts.js'

Posts = new Mongo.Collection("posts");

export class PrivateWall extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        posts: Meteor.subscribe("allPosts")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.posts.stop();
  }

  posts() {
    return Posts.find().fetch();
  }

  render() {

    console.log(this.posts())
    const Grid = makeResponsive(measureItems(SpringGrid), {
      maxWidth: 1920,
      minPadding: 10
    });
    return (
      <Grid component="span" className="grid" layout={layout.pinterest} columns={8} columnWidth={300} gutterWidth={15} gutterHeight={15} springConfig={{ stiffness: 170, damping: 26 }}>
        {this.posts().map((post) => {
          return (
            <div className="brick white z-depth-1 hoverable" key={post._id}>
              <CardWrapper post={post}/>
            </div>
          )
        })}
      </Grid>
    )
  }
}
