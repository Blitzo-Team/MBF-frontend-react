import { combineReducers } from "redux";


const appReducer = combineReducers({
  // login: 
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
