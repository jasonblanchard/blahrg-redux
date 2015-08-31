export const thunkMiddleware = store => next => action => {
  if (typeof action !== 'function') {
    return next(action);
  }

  const result = action(store.dispatch, store.getState);

  return result;
}
