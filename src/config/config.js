// Packages
// Action Creators
import { getGames } from '../redux/duckGames'

// Components

export const getData = store => {
  store.dispatch(getGames())
}
