/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import update from 'immutability-helper';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return update(state, {
        loading: { $set: true },
        error: { $set: false },
        userData: { repositories: { $set: false } },
      });
    case LOAD_REPOS_SUCCESS:
      return update(state, {
        userData: { repositories: { $set: action.repos } },
        loading: { $set: false },
        currentUser: { $set: action.username },
      });

    case LOAD_REPOS_ERROR:
      return update(state, {
        error: { $set: action.error },
        loading: { $set: false },
      });
    default:
      return state;
  }
}

export default appReducer;
