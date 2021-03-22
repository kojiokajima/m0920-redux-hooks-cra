import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import listReducer from '../reducer/listReducer'

export const store = createStore(listReducer, composeWithDevTools())
