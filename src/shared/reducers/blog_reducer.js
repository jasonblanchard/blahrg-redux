import { combineReducers } from 'redux';
import { ADD_POST, FEATURE_POST, SET_VISIBILITY_FILTER, SET_TAG_FILTER, VisibilityFilters } from '../actions/blog_actions';
const { SHOW_ALL } = VisibilityFilters;

/* State shape
 *
 * {
 *  visibilityFilter: 'SHOW_ALL',
 *  tagFilter: [],
 *  posts: [
 *    {
 *      id: 1,
 *      title: 'first post',
 *      body: "I'm a post',
 *      featured: false
 *    }
 *  ],
 *  tags: [
 *    {
 *      id: 1,
 *      name: 'cats',
 *    }
 *  ]
 *
 *  
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

function tagFilter(state = [], action) {
  switch(action.type) {
  case SET_TAG_FILTER:
    return action.tagIds;
  default:
    return state;
  }
}

function tags(state = [], action) {
  switch(action.type) {
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
        featured: !state[index].featured
      }),
      ...state.slice(index + 1)
    ]
  default:
    return state;
  }
}

const blogApp = combineReducers({
  visibilityFilter,
  tagFilter,
  posts,
  tags
});

export default blogApp;
