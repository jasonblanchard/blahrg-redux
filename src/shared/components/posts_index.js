import React from 'react';
import VisibilityFilter from './post_visibility_filter';
import TagVisibilityFilter from './tag_visibility_filter';
import { Link } from 'react-router';

export default class PostIndex extends React.Component {
  
  handleFeaturePost(id) {
    this.props.onFeaturePost(id);
  }

  render() {

    let renderTag = (tagId) => {

      let tag = this.props.allTags.find(tag => tag.id === tagId);

      return (
        <li key={tag.id}>{tag.name}</li>
      );
    }

    let renderPost = (post) => {
      return (
        <div key={post.id}>
          <Link to='post' params={{postId: post.id}}><h2>{post.title}</h2></Link>
          <p>{post.body}</p>
          <p>Featured: {post.featured.toString()}</p>
          <button onClick={this.handleFeaturePost.bind(this, post.id)} >Feature</button>

          <h3>Tags:</h3>
          <ul>
            {post.tags.map(renderTag)}
          </ul>

        </div>
      );
    }

    return (
      <div>
        <VisibilityFilter onChange={this.props.onFilterChange} activeFilter={this.props.visibilityFilter}/>

        <TagVisibilityFilter onChange={this.props.onTagFilterChange} tagFilter={this.props.tagFilter} allTags={this.props.allTags}/>

        {this.props.visiblePosts.map(renderPost)}
      </div>
    );
  }
}
