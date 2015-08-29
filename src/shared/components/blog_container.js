import React, { Component, PropTypes } from 'react';
import { RouteHandler, Link } from 'react-router';
import PostsIndex from './posts_index';
import { connect } from 'react-redux';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../actions/blog_actions';

class BlogContainer extends React.Component {
  render() {

    const { dispatch, visiblePosts, allPosts, visibilityFilter } = this.props;

    return (
      <div>
        <RouteHandler
          posts={visiblePosts}
          allPosts={allPosts}
          onFilterChange={filter => dispatch(setVisibilityFilter(filter))}
          visibilityFilter={visibilityFilter}
        />
      </div>
    );
  }
}

BlogContainer.propTypes = {
  visiblePosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired
  })),
}

function selectPosts(posts, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return posts;
  case VisibilityFilters.SHOW_FEATURED:
    return posts.filter(post => post.featured);
  }
}

function select(state) {
  return {
    allPosts: state.posts,
    visiblePosts: selectPosts(state.posts, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(BlogContainer);
