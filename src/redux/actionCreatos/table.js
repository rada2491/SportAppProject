import * as a from '../actions/types'

const API = 'http://api.football-data.org/v1/soccerseasons/'
const APIEND = '/leagueTable'

const API2 = 'http://localhost:3000/soccerseasons/'

const myHeaders = new Headers({
  'Content-Type': 'application/json',
  'X-Auth-Token': '176d0f15e52c4479976af3e3a372afcb'
});

export default function getDetailInfo(id) {
  const url = API + id + APIEND
  //local db
  //const url = API2 + id
  return async distpatch => {
    distpatch({
      type: a.Table_GETALL_REQUEST
    })

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders
      })
      const result = await response.json()
      distpatch({
        type: a.Table_GETALL_SUCCESS,
        payload: result.standing
      })
    } catch (error) {
      distpatch({
        type: a.Table_GETALL_FAILURE,
        error: error
      })
    }
  }
}

export function getUpdatedInfo(id) {
  const url = API + id + APIEND
  //local db
  //const url = API2 + id
  return async distpatch => {
    distpatch({
      type: a.Table_GETALL_REQUEST
    })

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders
      })
      const result = await response.json()
      distpatch({
        type: a.Table_GETALL_SUCCESS,
        payload: result.standing
      })
    } catch (error) {
      distpatch({
        type: a.Table_GETALL_FAILURE,
        error: error
      })
    }
  }
}