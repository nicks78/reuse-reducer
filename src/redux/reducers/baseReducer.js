// manager/src/redux/baseReducer.js


class BaseState {
    tmp_state = {};
    item = null;
    isUpdating = false;
    receivedAt = null;
    progress = 0;
    isCreating = false;
    isFetching = false;
    isError = false;
    list = []
}



const baseReducer = (state = new BaseState(), action) => {
    

    switch (action.type) {
        case `REQUEST`:
            return  { 
                ...state,
                isFetching: action.isFetching,
                isError: action.isError
            }
        case `FAILED`: 
            return {
                ...state,
                isFetching: action.isFetching,
                receivedAt: action.receivedAt, 
                isError: action.isError,
            }

        case `RECEIVE`:
            return  { 
                ...state,
                isFetching: action.isFetching,
                list: action.payload,
                receivedAt: action.receivedAt
            }

        case `GET`: 
            return {
                ...state,
                item: action.item,
                isFetching: action.isFetching,
            }

        default:
            return state;
    }
}



export default baseReducer;