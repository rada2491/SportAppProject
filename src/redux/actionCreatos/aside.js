import * as a from '../actions/types'

const API = 'http://api.football-data.org/v1/soccerseasons';

const BACKUPAPI = 'http://localhost:3000/leagues';

const myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

export default function getAllLeagues() {
  return async dispatch => {
    dispatch({
      type: a.ASIDE_GETALL_REQUEST
    })

    try {
      const response = await fetch(API , {
        method: 'GET',
        headers: myHeaders
      })
      //const response = await fetch(BACKUPAPI)
      const result = await response.json()
      let it = result.slice(0, 13);

      dispatch({
        type: a.ASIDE_GETALL_SUCCESS,
        payload: it
      })

    } catch (error) {
      distpatch({
        type: a.ASIDE_GETALL_FAILURE,
        error: error
      })
    }
  }
}