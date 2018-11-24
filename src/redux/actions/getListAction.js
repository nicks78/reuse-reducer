// manager/src/redux/HOC/getListAction.js


import axios from 'axios';
import { API_ENDPOINT } from '../constant'
import { requestData  } from './'


// GET FULL LIST OF ITEM
export function getItemList( actionType ){

    return dispatch => {

        dispatch(requestData(actionType))

        axios.get(`${API_ENDPOINT}${actionType.toLowerCase()}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
              'x-access-token': localStorage.getItem('token')
          }
        })
        .then(function (response) { 
            return response.data
        }) 
        .then( res => {
            dispatch(receiveItems(actionType, res))
        })              
    }
}

function receiveItems(actionType, items) {
  return {
    type: `RECEIVE`,
    subtype: actionType,
    isFetching: false,
    payload: items,
    receivedAt: Date.now()
  }
}