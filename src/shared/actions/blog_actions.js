export const ADD_POST = 'ADD_POST';
export const FEATURE_POST = 'FEATURE_POST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';
export const UPDATE_PENDING_POST = 'ADD_PENDING_POST';
import Qajax from 'qajax';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FEATURED: 'SHOW_FEATURED'
};

export function requestAddPost(postParams) {
  return function(dispatch) {

    dispatch(updatePendingPost(postParams));
    
    return Qajax({url: "/api/posts/",
                 method: 'POST',
                 data: {postParams: postParams}
    }).then((data) => {
      dispatch(updatePendingPost({}));
      dispatch(addPost(JSON.parse(data.response)));
    })
  }
}

export function addPost(postParams) {
  return {
    type: ADD_POST,
    postParams
  }
}

export function updatePendingPost(postParams) {
  console.log("Updaing", postParams);
  return {
    type: UPDATE_PENDING_POST,
    postParams
  }
}

export function featurePost(id) {
  return {
    type: FEATURE_POST,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function setTagFilter(tagIds) {
  return {
    type: SET_TAG_FILTER,
    tagIds
  }
}
