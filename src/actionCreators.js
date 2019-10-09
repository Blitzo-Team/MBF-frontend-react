import { axios, getAuthHeader, getError } from "./shared/utils/axios";
import { BASE_URL } from "./shared/constant/url";

export const TYPES = {
  MENU_LIST_START: "MENU_LIST_START",
  MENU_LIST_SUCCESS: "MENU_LIST_SUCCESS",
  MENU_LIST_FAILED: "MENU_LIST_FAILED"
};

export const menulist = () => {
  return dispatch => {
    dispatch({ type: TYPES.MENU_LIST_START });

    axios
      .get(`${BASE_URL}/api/menus`, getAuthHeader())
      .then(response => {
        dispatch({ type: TYPES.MENU_LIST_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: TYPES.MENU_LIST_FAILED, payload: getError(error) });
      });
  };
};
