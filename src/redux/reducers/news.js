import * as a from '../actions/types'

const INITIAL_STATE = {
    news: [],
    isLoaded: false
}

export default function newsReducer ( state = INITIAL_STATE, action){
    switch (action.type) {
        case a.NEWS_GETALL_REQUEST:
        return {
            ...state,
            isLoaded: true
        }
        case a.NEWS_GETALL_SUCCESS:
        return {
            ...state,
            isLoaded: false,
            news: action.payload
        }    
        default:
            return state
    }
}