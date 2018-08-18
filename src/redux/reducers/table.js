import * as a from '../actions/types'

const INITIAL_STATE = {
  info: [],
  isLoaded: false
}

export default function tableReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.Table_GETALL_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.Table_GETALL_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        info: action.payload
      }
    default:
      return state
  }
}