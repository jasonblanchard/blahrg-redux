import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from '../shared/thunk-middleware';

import blogApp from '../shared/reducers/blog_reducer';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../shared/actions/blog_actions';

let initialState = document.getElementById('init-data').value;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

let store = createStoreWithMiddleware(blogApp, JSON.parse(initialState));

let router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

router.run((Handler) => {
  React.render(
    <Provider store={store}>
      {() => <Handler router={router} />}
    </Provider>,
    document.getElementById('app')
  );
});
