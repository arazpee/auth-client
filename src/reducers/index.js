import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import getItems from './getItems';

export default combineReducers({
  auth,
  form: formReducer,
  getItems,
});
