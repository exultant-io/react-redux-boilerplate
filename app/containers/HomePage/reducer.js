/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { changeUsername } from './actions';

// The initial state of the App
const initialState = {
  username: '',
};

const homeReducer = handleActions(
  {
    [changeUsername](state, { payload }) {
      return update(state, {
        username: { $set: payload.replace(/@/gi, '') },
      });
    },
  },
  initialState,
);

export default homeReducer;
