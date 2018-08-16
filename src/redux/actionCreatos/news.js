import * as a from '../actions/types'

var items= []

const API = 'http://localhost:3000/news/'

export default function getAllNews() {
  return async dispatch => {
    dispatch({
      type: a.NEWS_GETALL_REQUEST
    })

    try {

      const response = await fetch(API)
      const result = await response.json()


      /*fetch(API)
        .then(res => res.json())
        .then(data => {
            items = data
        });*/

        dispatch({
          type: a.NEWS_GETALL_SUCCESS,
          payload: result
        })

    } catch (error) {

    }
  }
}