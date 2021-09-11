import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './modules/auth'

const rootReducer = combineReducers({
    auth: authReducer
})

type RootState = ReturnType<typeof rootReducer>

type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer, applyMiddleware(thunk))

export { store }
export type { RootState, AppDispatch }
