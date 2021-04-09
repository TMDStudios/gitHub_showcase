import { combineReducers } from 'redux';
import projects from './projects';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    projects,
    errors,
    messages,
    auth
});