//manager/src/redux/HOC/libraryReducer.js

import baseReducer from './baseReducer'


class BaseState {
    tmp_state = { };
    item = null;
    progress = 0 ;
    isUpdating = false;
    receivedAt = null;
    isCreating = false;
    isFetching = false;
    isError = false;
    list = []
}


class InitialState {
    posts = new BaseState();
    comments = new BaseState();
    albums = new BaseState();
}
  
export default (state = new InitialState(), action) => {
 
    switch (action.subtype) {
      case 'POSTS':
        return {
          ...state,
          posts: baseReducer(state.posts, action)
        }
      case 'COMMENTS': 
        return {
          ...state,
          comments: baseReducer(state.comments, action)
        }
      case 'ALBUMS': 
        return {
          ...state,
          albums: baseReducer(state.albums, action)
        }
      default: return state;
    }
}


  