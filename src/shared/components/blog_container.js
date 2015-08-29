import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { RouteHandler, Link } from 'react-router';
import PostsIndex from './posts_index';
import { connect } from 'react-redux';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../actions/blog_actions';

class BlogContainer extends React.Component {
  render() {

    const { actions, visiblePosts, allPosts, activePost, visibilityFilter } = this.props;

    return (
      <div>
        <RouteHandler
          posts={visiblePosts}
          allPosts={allPosts}
          onFilterChange={filter => actions.setVisibilityFilter(filter)}
          visibilityFilter={visibilityFilter}
          activePost={activePost}
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

function selectActivePost(posts, id) {
  // TODO fetch it if it's not in posts
  return posts.find(post => post.id === Number(id));
}

function mapStateToProps(state, ownProps) {
  return {
    allPosts: state.posts,
    visiblePosts: selectPosts(state.posts, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    activePost: selectActivePost(state.posts, ownProps.params.postId)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addPost, featurePost, setVisibilityFilter}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
