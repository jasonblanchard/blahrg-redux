import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import blogApp from '../shared/reducers/blog_reducer';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../shared/actions/blog_actions';

let initialState = document.getElementById('init-data').value;

let store = createStore(blogApp, JSON.parse(initialState));

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(
    <Provider store={store}>
      {() => <Handler />}
    </Provider>,
    document.getElementById('app')
  );
});
