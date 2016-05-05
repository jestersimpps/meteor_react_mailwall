import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {CardWrapper} from '../cardwrapper/cardwrapper.jsx';

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


    return (
      <div>
        {this.posts().map((post) => {
          return (
            <div class="brick white z-depth-1" key={post._id}>
              <CardWrapper post={post}/>
            </div>
          )
        })}

      </div>

    )
  }
}
