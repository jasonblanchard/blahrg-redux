import React from 'react';

export default class PostIndex extends React.Component {
  render() {

    function renderPost(post) {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Featured: {post.featured.toString()}</p>
        </div>
      );
    }
    
    return (
      <div>
        {this.props.posts.map(renderPost)}
      </div>
    );
  }
}
