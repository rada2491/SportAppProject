import * as a from '../../actions/types'

const INITIAL_STATE = {
    items: [],
    isLoading: false,
    modal: false
}

function newsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case a.NEWS_GETALL_REQUEST:
            console.log('get all....')
            return true

        case a.NEWS_GETALL_SUCCESS:
            console.log('get all success....')
            return true

        case a.NEWS_GETALL_FAILURE:
            console.log('get all fail....')
            return true

        default:
            return state
    }
}

export default newsReducer