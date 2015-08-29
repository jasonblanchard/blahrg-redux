import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import BlogContainer from './components/blog_container';
import About from './components/about';
import Post from './components/post';
import RootContainer from './components/root_container';
import PostIndex from './components/posts_index';

export default (
  <Route name='app' path='/' handler={RootContainer}>
    <Route name='about' path='/about' handler={About} />
    <Route name='blog' path='/blog' handler={BlogContainer}>
      <Route name='post' path='post/:postId' handler={Post} />
      <DefaultRoute handler={PostIndex}/>
    </Route>
    <DefaultRoute handler={BlogContainer} />
  </Route>
)
