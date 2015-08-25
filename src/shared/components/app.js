import React, { Component, PropTypes } from 'react';
import { RouteHandler, Link } from 'react-router';
import PostsIndex from './posts_index';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to='app'>Blahrg</Link></h1>
        <nav>
          <ul>
            <li><Link to='about'>About</Link></li>
          </ul>
        </nav>

        <PostsIndex posts={this.props.visiblePosts}>
        </PostsIndex>

        <RouteHandler/>
      </div>
    );
  }
}

App.propTypes = {
  visiblePosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired
  })),
}

function selectPosts(posts, filter) {
  // TODO: Implement filter based on featured
  return posts
}

function select(state) {
  return {
    visiblePosts: selectPosts(state.posts, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
