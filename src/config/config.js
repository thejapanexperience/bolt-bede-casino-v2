// Packages
// Action Creators
import { getGames } from '../redux/duckGames'
import { getFeeds } from '../redux/duckFeeds'

// Components

export const getData = store => {
  store.dispatch(getFeeds())
  store.dispatch(getGames())
}
