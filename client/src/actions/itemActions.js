import axios from "axios";
import { GET_ITEMS, POST_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => dispatch => {
    axios
        .get('/api/items')
        .then(res => 
            dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
}

export const postItem = newItem => dispatch => {
    axios
        .post('/api/items', {"name": newItem})
        .then(res => 
            dispatch({
            type: POST_ITEM,
            payload: res.data
        }))
}

export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(() => 
            dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
    }