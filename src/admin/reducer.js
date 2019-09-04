import {BF} from './actionCreator';

const INITIAL_STATE = {
    loading: false,
    error: '',
    bf: {},
   
};


 const BreakfastReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        
        case BF.START:
            return {...state, loading: true, error: ''};
        case BF.SUCCESS:
            return {...state, loading: false, case: action.payload};
        case BF.FAILED:
            return {...state, loading: false, error: action.payload};

        case BF.LIST_START:
            return{...state, loading: true, error:''};
        case BF.LIST_SUCCESS:
            return{...state, loading: false, bf: action.payload};
        case BF.LIST_FAILED:
            return{...state, laoding: false, error: action.payload};

    
        default:
            return state;
    }
}


export default BreakfastReducer;
