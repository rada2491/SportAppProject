import * as a from '../actions/types'

const INITIAL_STATE = {
  results: [],
  isLoaded: false
}

export default function resultsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.RESULTS_GETALL_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.RESULTS_GETALL_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        results: action.payload
      }
    default:
      return state
  }
}