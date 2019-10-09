import { combineReducers } from "redux";
import BreakfastReducer from "../../admin/reducer";
import MenulistReducer from "../../redux";

const appReducer = combineReducers({
  bf: BreakfastReducer,
  menu: MenulistReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
