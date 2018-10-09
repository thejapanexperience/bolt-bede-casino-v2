// Packages

// Action Creators
import { getGames } from '../redux/duckGames'
import { getFeeds } from '../redux/duckFeeds'
import { logInUser } from '../redux/duckUser'

// Components

// Get feeds and games data and put it in the store
export const getData = store => {
  store.dispatch(getFeeds())
  store.dispatch(getGames())
  store.dispatch(logInUser())
}