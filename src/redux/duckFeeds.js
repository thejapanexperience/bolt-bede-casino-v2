// Imports
import axios from 'axios'
import { all, takeEvery, call, put } from 'redux-saga/effects'

// Actions
export const GET_WINNERS_FEED = 'GET_WINNERS_FEED'
export const SHOW_WINNERS_FEED = 'SHOW_WINNERS_FEED'

// Reducers
export const winnersFeed = (state = [], action) => {
  if (action.type === SHOW_WINNERS_FEED) {
    return action.payload
  }
  return state
}

// Action Creators
export function getFeeds() {
  return { type: GET_WINNERS_FEED }
}

export function showFeeds(feeds) {
  return { type: SHOW_WINNERS_FEED, payload: feeds }
}

export function axiosError() {
  console.log('sadface...')
}

// Sagas
// rootSaga
export function* feedsSaga() {
  yield all([getWinnersFeedSaga()]) // yield is like 'await'
}

// Get Feeds Saga
export function* getWinnersFeedSaga() {
  yield takeEvery(GET_WINNERS_FEED, getWinnersFeedsRequest) // takeEvery will hijack actions
}

export function* getWinnersFeedsRequest(action) {
  try {
    const response = yield call(axios, {
      method: 'get',
      url: `https://qa02-bedecasino.bedegaming.net/feeds/v1/recentwinners?take=25`,
      headers: {
        'X-Correlation-Token': 'b9cf717c-39cb-4cf5-adad-0af58d79a3aa',
        'X-Site-Code': 'bedecasino',
        'X-Spine-Client': 'bolt',
      },
    })
    const feeds = response.data
    yield put(showFeeds(feeds)) // put will invoke a function
  } catch (error) {
    console.log(`There's an error!`)
    console.log(error)
    yield put(axiosError())
  }
}
