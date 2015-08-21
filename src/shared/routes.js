import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './components/app';
import About from './components/about';
import Post from './components/post';

export default (
  <Route name='app' path='/' handler={App}>
    <Route name='about' path='/about' handler={About} />
    <Route name='post' path='/post/:postId' handler={Post} />
  </Route>
)
