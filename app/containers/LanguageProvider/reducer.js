/*
 *
 * LanguageProvider reducer
 *
 */
import update from 'immutability-helper';
import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

const initialState = {
  locale: DEFAULT_LOCALE,
};

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return update(state, { locale: { $set: action.locale } });
    default:
      return state;
  }
}

export default languageProviderReducer;
