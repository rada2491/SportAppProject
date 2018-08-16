import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsReducer from './news'

export default combineReducers({
  news: newsReducer,
  router: routerReducer
})