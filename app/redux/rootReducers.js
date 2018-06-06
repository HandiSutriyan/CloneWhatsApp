import { combineReducers } from 'redux'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import chatsReducer from '../chatting/reducers'
import callReducer from '../call/reducers'
import statusReducer from '../status/reducers'

const appReducer = combineReducers({
  nav,
  contactsReducer,
  chatsReducer,
  callReducer,
  statusReducer
})

export default appReducer
