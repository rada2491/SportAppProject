import * as a from '../actions/types'

const INITIAL_STATE = {
  isLoaded: false,
  leagues: []
}

export default function asideReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.ASIDE_GETALL_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.ASIDE_GETALL_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        leagues: action.payload
      }
    default:
      return state
  }
}