import * as a from '../actions/types'

const API = 'http://localhost:3000/news/'

export default function updateNews(newObj) {

  return async dispatch => {
    dispatch({
      type: a.NEWS_GETALL_UPDATE
    })

    try {
      await fetch(API, {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(success => console.log('Success:', success))
        .catch(error => console.log('Error:', error))

      const response = await fetch(API)
      const result = await response.json()
      dispatch({
        type: a.NEWS_GETALL_UPDATE,
        payload: result
      })
    } catch (error) {
      dispatch({
        type: a.NEWS_GETALL_FAILURE,
        error: error
      })
    }
  }
}