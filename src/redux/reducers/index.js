import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsReducer from './news'
import asideReducer from './aside'
import tableReducer from './table'
import resultsReducer from './results'

export default combineReducers({
  news: newsReducer,
  aside: asideReducer,
  table: tableReducer,
  results: resultsReducer,
  router: routerReducer
})