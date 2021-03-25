import {createStore} from 'redux'
import {reducer} from './reducers'

// This is a store it brings reducer and action together
export const store = createStore(reducer)