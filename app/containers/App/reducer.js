/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */

import update from 'immutability-helper';
import { handleActions } from 'redux-actions';
import { loadRepos, loadReposSuccess, loadReposError } from './actions';
// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

const appReducer = handleActions(
  {
    [loadRepos](state) {
      return update(state, {
        loading: { $set: true },
        error: { $set: false },
        userData: { repositories: { $set: false } },
      });
    },
    [loadReposSuccess](state, { payload }) {
      const { repos, username } = payload;
      return update(state, {
        userData: { repositories: { $set: repos } },
        loading: { $set: false },
        currentUser: { $set: username },
      });
    },
    [loadReposError](state, { payload }) {
      return update(state, {
        error: { $set: payload },
        loading: { $set: false },
      });
    },
  },
  initialState,
);

export default appReducer;
