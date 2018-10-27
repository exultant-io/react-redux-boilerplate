/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export const yourAction = createAction(type)
 */

import { createAction } from 'redux-actions';
import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

// /**
//  * Load the repositories, this action starts the request saga
//  *
//  * @return {object} An action object with a type of LOAD_REPOS
//  */

export const loadRepos = createAction(LOAD_REPOS);

// /**
//  * Dispatched when the repositories are loaded by the request saga
//  *
//  * @param  {array} payload The data passed
//  *
//  * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
//  */

export const loadReposSuccess = createAction(LOAD_REPOS_SUCCESS);

// /**
//  * Dispatched when loading the repositories fails
//  *
//  * @param  {object} error The error
//  *
//  * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
//  */
export const loadReposError = createAction(LOAD_REPOS_ERROR);
