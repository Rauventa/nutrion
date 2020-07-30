import {ADD_TO_CART, UPDATE_CART} from "../actions/actionTypes";


const initialState = {
  cart: []
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.cart
            };
        case UPDATE_CART:
            return  {
                ...state,
                cart: action.sorted
            };
        default:
            return state
    }
}