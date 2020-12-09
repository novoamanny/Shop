import {GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS} from '../actions/types';

const initialState = {
    availableProducts: [],
    userProducts: [],
    error: []
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_PRODUCTS_SUCCESS:
            return{...state, availableProducts: payload};
        case GET_PRODUCTS_FAIL:
            return{...state, error: payload};

        default:
            return state
    }

}