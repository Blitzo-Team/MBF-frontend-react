import { API_BANNER_UPLOAD } from "../../shared/constant/url";
import { axios, getAuthHeader, getError } from "../../shared/utils/axios";

export const USER = {
  START: "USER_LIST_START",
  SUCCESS: "USER_LIST_SUCCESS",
  FAILED: "USER_LIST_FAILED"
};

// export const userList= () => {
//     return (dispatch)=> {
//         dispatch({ type: USER.START });

//         axios.get(API_USER_LIST, getAuthHeader())
//         .then(response => {  dispatch({ type: USER.SUCCESS, payload: response.data}) })
//         .catch(error=> { dispatch({type: USER.FAILED, payload: getError(error) }) })
//     }
// }

export const BannerUpload = (values, callback = null) => {
  return () => {
    axios
      .post(API_BANNER_UPLOAD, values, getAuthHeader())
      .then(response => console.log(response))
      .catch(error => (error ? console.log(getError(error)) : ""));
  };
};
