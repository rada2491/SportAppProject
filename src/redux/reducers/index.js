import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsReducer from './news'
import asideReducer from './aside'
import tableReducer from './table'

export default combineReducers({
  news: newsReducer,
  aside: asideReducer,
  table: tableReducer,
  router: routerReducer
})