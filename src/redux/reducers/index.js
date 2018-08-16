import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsReducer from './news'
import asideReducer from './aside'

export default combineReducers({
  news: newsReducer,
  aside: asideReducer,
  router: routerReducer
})