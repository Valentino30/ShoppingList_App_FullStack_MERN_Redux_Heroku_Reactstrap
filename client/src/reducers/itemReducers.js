import { GET_ITEMS, POST_ITEM, DELETE_ITEM } from "../actions/types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
            }    
        case POST_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items],
            }    
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }    
        default:
            return state;
    }
}