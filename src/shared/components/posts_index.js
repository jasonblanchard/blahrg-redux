import React from 'react';
import VisibilityFilter from './post_visibility_filter';

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
        <VisibilityFilter onChange={this.props.onFilterChange} activeFilter={this.props.visibilityFilter}/>
        {this.props.posts.map(renderPost)}
      </div>
    );
  }
}
