import { combineReducers } from '@reduxjs/toolkit';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import sliderReducer from './fuse/OptionsSlice';
// import editArrReducer from './fuse/OptionsSlice';
import partnersReducer from './fuse/PartnersSlice'
const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    fuse,
    i18n,
    user,
    ...asyncReducers,
    slider: sliderReducer,
    partners:partnersReducer
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
