import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { RouteHandler, Link } from 'react-router';
import PostsIndex from './posts_index';
import { connect } from 'react-redux';
import { addPost, featurePost, setVisibilityFilter, setTagFilter, requestAddPost, VisibilityFilters } from '../actions/blog_actions';

class BlogContainer extends React.Component {
  render() {

    const { actions } = this.props;

    return (
      <div>
        <RouteHandler
          {...this.props}
          onFilterChange={filter => actions.setVisibilityFilter(filter)}
          onFeaturePost={id => actions.featurePost(id)}
          onTagFilterChange={tagIds => actions.setTagFilter(tagIds)}
          onAddPost={postParams => actions.requestAddPost(postParams)}
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


// TODO Could make a more composable filter here
function selectPostsByTag(posts, selectedTagIds) {
  if (selectedTagIds.length > 0) {
    return posts.filter(post => {
      return post.tags.map(tagId => selectedTagIds
                           .includes(tagId))
                           .some(result => result === true)
    });
  } else {
    return posts;
  }
}

function selectPosts(posts, filter, tagFilter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return selectPostsByTag(posts, tagFilter);
  case VisibilityFilters.SHOW_FEATURED:
    return selectPostsByTag(posts.filter(post => post.featured), tagFilter);
  }
}


function selectActivePost(posts, id) {
  // TODO fetch it if it's not in posts
  return posts.find(post => post.id === Number(id));
}

function mapStateToProps(state, ownProps) {
  return {
    allPosts: state.posts,
    allTags: state.tags,
    visiblePosts: selectPosts(state.posts, state.visibilityFilter, state.tagFilter)
    .sort((first, second) => first.id > second.id).reverse(),
    visibilityFilter: state.visibilityFilter,
    activePost: selectActivePost(state.posts, ownProps.params.postId),
    tagFilter: state.tagFilter,
    pendingPost: state.pendingPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addPost,
                                featurePost,
                                setVisibilityFilter,
                                setTagFilter,
                                requestAddPost}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
