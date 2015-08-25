import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import blogApp from '../shared/reducers/blog_reducer';
import { addPost, featurePost, setVisibilityFilter, VisibilityFilters } from '../shared/actions/blog_actions';

let store = createStore(blogApp);

console.log(store.getState());
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


let newPost = {id: 1, title: 'first', body: "blah dee blah", featured: false}
store.dispatch(addPost(newPost));

let secondPost = {id: 2, title: 'second', body: "Imma second post", featured: false}
store.dispatch(addPost(secondPost));

//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_FEATURED))
store.dispatch(featurePost(1));

unsubscribe();

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(
    <Provider store={store}>
      {() => <Handler />}
    </Provider>,
    document.getElementById('app')
  );
});
