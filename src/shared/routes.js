import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Blog from './components/blog';
import About from './components/about';
import Post from './components/post';
import RootContainer from './components/root_container';

export default (
  <Route name='app' path='/' handler={RootContainer}>
    <Route name='about' path='/about' handler={About} />
    <Route name='blog' path='/blog' handler={Blog} />
    <DefaultRoute handler={Blog} />
  </Route>
)
