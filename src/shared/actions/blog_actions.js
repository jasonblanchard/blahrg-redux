export const ADD_POST = 'ADD_POST';
export const FEATURE_POST = 'FEATURE_POST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FEATURED: 'SHOW_FEATURED'
};

export function addPost(postParams) {
  return {
    type: ADD_POST,
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
