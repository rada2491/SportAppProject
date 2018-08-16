import * as a from '../actions/types'

const API = 'http://localhost:3000/news/'

export default function getAllNews() {
  return async dispatch => {
    dispatch({
      type: a.NEWS_GETALL_REQUEST
    })

    try {

      const response = await fetch(API)
      const result = await response.json()

      dispatch({
        type: a.NEWS_GETALL_SUCCESS,
        payload: result
      })

    } catch (error) {

    }
  }
}

/*export function updateCards() {
  return async dispatch => {
    dispatch({
      type: a.NEWS_GETALL_UPDATE
    })

    try {
      const response = await fetch(API)
      const result = await response.json()
      
    } catch (error) {
      
    }
  }

}*/