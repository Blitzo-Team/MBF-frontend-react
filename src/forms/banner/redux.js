import { USER } from "./actionCreators";

const INITIAL_STATE = {
  loading: false,
  error: "",
  user: {},
  users: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.START:
      return { ...state, loading: true, error: "" };
    case USER.SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case USER.FAILED:
      return { ...state, loading: false, error: action.payload };

    case USER.USER_ADD_START:
      return { ...state, loading: true, error: "" };
    case USER.USER_ADD_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER.USER_ADD_FAILED:
      return { ...state, loading: false, error: action.payload };

    case USER.USER_EDIT_START:
      return { ...state, loading: true, error: "" };
    case USER.USER_EDIT_SUCCESS:
      // const newData = action.payload;
      // const data = state.users;
      // for(var i=0; i < data.length; i++){
      //     if(data[i].id == newData.id ){
      //      data[i] = newData;
      //     }
      // }
      return { ...state, loading: false, users: action.payload };
    case USER.USER_EDIT_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
