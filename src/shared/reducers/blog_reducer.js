import { combineReducers } from 'redux';
import { ADD_POST, FEATURE_POST, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/blog_actions';
const { SHOW_ALL } = VisibilityFilters;

/* State shape
 *
 * {
 *  visibilityFilter: 'SHOW_ALL',
 *  posts: [
 *    {
 *      id: 1,
 *      title: 'first post',
 *      body: "I'm a post',
 *      featured: false
 *    }
 *  ]
 *}
 *
 */

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function posts(state = [], action) {
  switch(action.type) {
  case ADD_POST:
    let postParams = action.postParams
    return [...state, {
      id: postParams.id,
      title: postParams.title,
      body: postParams.body,
      featured: postParams.featured
    }]
  case FEATURE_POST:
    
    let index = state.findIndex((element, index) => {
      return element.id === action.id;
    });

    return [
      ...state.slice(0, index),
      Object.assign({}, state[index], {
        featured: true
      }),
      ...state.slice(index + 1)
    ]
  default:
    return state;
  }
}

const blogApp = combineReducers({
  visibilityFilter,
  posts
});

export default blogApp;
