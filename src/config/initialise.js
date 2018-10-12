// Packages

// Action Creators
import { getGames } from 'tlob-library-redux/duckGames'
import { getFeeds } from 'tlob-library-redux/duckFeeds'
import { logInUser } from 'tlob-library-redux/duckUser'

// Components

// Get feeds and games data and put it in the store
export const getData = store => {
  store.dispatch(getFeeds())
  store.dispatch(getGames())
  store.dispatch(logInUser())
}
