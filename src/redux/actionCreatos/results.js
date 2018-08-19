import * as a from '../actions/types'

const API = 'http://localhost:3000/results/'

export default function getAllResults() {
  return async dispatch => {
    dispatch({
      type: a.RESULTS_GETALL_REQUEST
    })
    try {
      const response = await fetch(API)
      const result = await response.json()
      dispatch({
        type: a.RESULTS_GETALL_SUCCESS,
        payload: result
      })
    } catch (error) {
      distpatch({
        type: a.RESULTS_GETALL_FAILURE,
        error: error
      })
    }
  }
}

export function updateNews(newObj) {
  
  return async dispatch => {
    dispatch({
      type: a.NEWS_GETALL_UPDATE
    })

    try {
      fetch(API, {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.log('Error:', error))
        .then(success => console.log('Success:', success))

      const response = await fetch(API)
      const result = await response.json()
      dispatch({
        type: a.NEWS_GETALL_SUCCESS,
        payload: result
      })

    } catch (error) {
      distpatch({
        type: a.ASIDE_GETALL_FAILURE,
        error: error
      })
    }
  }

}