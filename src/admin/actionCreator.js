import { axios, getAuthHeader,  getError } from '../shared/utils/axios';
import {  BASE_URL } from '../shared/constant/url';

export const BF = {
    START: "BF_ADD_START",
    SUCCESS: "BF_ADD_SUCCESS",
    FAILED: "BF_ADD_FAILED",
    
    LIST_START: "BF_LIST_START",
    LIST_SUCCESS: "BF_LIST_SUCCESS",
    LIST_FAILED: "BF_LIST_FAILED",
} 

export const breakFastAdd = (params, callback=null) => {
    return ()=> {   
        axios.post(`${BASE_URL}/api/breakfast`, params, getAuthHeader())
        .then(response => { console.log(response) })
        .catch(error=> {  console.log(getError(error)); })
    }
}

export const breakFastList = ()=> {
    return(dispatch)=> {
        dispatch({ type: BF.LIST_START});

        axios.get(`${BASE_URL}/api/breakfasts`, getAuthHeader())
        .then(response=> {  dispatch({type: BF.LIST_SUCCESS, payload: response.data}) })
        .catch(error=> { dispatch({type: BF.LIST_FAILED, payload: getError(error)}) })
    }
}
