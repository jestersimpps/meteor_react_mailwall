import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Posts
        </h1>
        <form className="postform">
          <input type="text" ref="post" placeholder="Title"/>
        <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}
