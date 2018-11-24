import { combineReducers } from 'redux';


// Reducer import
import libraryReducer from './reducers/libraryReducer'




export default combineReducers({
    library: libraryReducer
})