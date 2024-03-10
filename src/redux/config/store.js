import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import BookReducer from '../reducer/BookReducer'

const rootReducer = combineReducers({
    BookReducer: BookReducer
})
const store = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default store