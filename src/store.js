import { createStore, combineReducers } from 'redux'
import userReducer from './Reducers/userReducer'
import characterReducer from './Reducers/characterReducer'
import apiReducer from './Reducers/apiReducer'

const mainReducer = combineReducers({
    users: userReducer,
    characters: characterReducer,
    api: apiReducer,
})

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())