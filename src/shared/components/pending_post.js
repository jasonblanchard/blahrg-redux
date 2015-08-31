import React from 'react';

export default class PendingPost extends React.Component {
  render() {

    let { post } = this.props;

    return(
      <div>
        Adding post.....
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
}
