import { combineReducers } from "redux";
import BreakfastReducer from '../../admin/reducer';

const appReducer = combineReducers({
   bf: BreakfastReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
