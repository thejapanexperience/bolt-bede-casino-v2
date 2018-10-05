// Imports
import axios from 'axios'
import { all, takeEvery, call, put } from 'redux-saga/effects'

// Actions
export const GET_GAMES = 'GET_GAMES'
export const SHOW_GAMES = 'SHOW_GAMES'

// Reducers
export const games = (state = [], action) => {
  if (action.type === SHOW_GAMES) {
    return action.payload
  }
  return state
}

// Action Creators
export function getGames() {
  return { type: GET_GAMES }
}

export function showGames(games) {
  return { type: SHOW_GAMES, payload: games }
}

export function axiosError() {
  console.log('sadface...')
}

// Sagas
// rootSaga
export function* gamesSaga() {
  yield all([getGamesSaga()]) // yield is like 'await'
}

// Get Games Saga
export function* getGamesSaga() {
  yield takeEvery(GET_GAMES, getGamesRequest) // takeEvery will hijack actions
}

export function* getGamesRequest(action) {
  try {
    const response = yield call(axios, {
      method: 'get',
      url: `https://qa02-bedecasino.bedegaming.net/api/v5/games?take=1000`,
      headers: {
        'X-Correlation-Token': '175ff72e-dfde-4668-a032-6c5a0910eba4',
        'X-Site-Code': 'bedecasino',
        'X-Spine-Client': 'bolt',
      },
    })
    const games = response.data.items
    yield put(showGames(games)) // put will invoke a function
  } catch (error) {
    console.log(`There's an error!`)
    console.log(error)
    yield put(axiosError())
  }
}
