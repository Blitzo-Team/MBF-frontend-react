import { TYPES } from "./actionCreators";

const INITIAL_STATE = {
  loading: false,
  error: "",
  menus: []
};

const BreakfastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.MENU_LIST_START:
      return { ...state, loading: true, error: "" };
    case TYPES.MENU_LIST_SUCCESS:
      return { ...state, loading: false, menus: action.payload };
    case TYPES.MENU_LIST_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default BreakfastReducer;
