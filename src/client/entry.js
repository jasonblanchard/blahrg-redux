import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

import { createStore } from 'redux';
import blogApp from '../shared/reducers/blog_reducer';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../shared/actions/blog_actions';

let store = createStore(blogApp);
console.log(store.getState());

let newPost = {id: 1, title: 'first', body: "blah dee blah", featured: false}
store.dispatch(addPost(newPost));
console.log(store.getState());

let secondPost = {id: 2, title: 'second', body: "Imma second post", featured: false}
store.dispatch(addPost(secondPost));
console.log(store.getState());

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_FEATURED))
console.log(store.getState());

store.dispatch(featurePost(1));
console.log(store.getState());

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('app'));
});
