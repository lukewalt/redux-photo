import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';


const defaultState = {
  posts,
  comments
};

// creates store using interface of the rootReducer with data of init state
export default const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory)
