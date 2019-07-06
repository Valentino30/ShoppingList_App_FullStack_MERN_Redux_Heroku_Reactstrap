import { createStore, applyMiddleware, compose } from 'redux';
import itemReducers from './reducers/itemReducers';
import thunk from 'redux-thunk'

const middleware = [thunk]

const initialState = { 
    items: []
}

const store = createStore(
    itemReducers, 
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store