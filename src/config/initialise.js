// Packages

// Action Creators
import { actions } from '@bedegaming/bolt-v2'
const { getFeeds, getGames } = actions
// Components

// Get feeds and games data and put it in the store
export const getData = store => {
  store.dispatch(getFeeds())
  store.dispatch(getGames())
}
