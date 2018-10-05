// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actionCreators
class Data extends Component {
  render() {
    const { winnersFeed, games } = this.props
    console.log('winnersFeed: ', winnersFeed)
    console.log('games: ', games)

    return <div />
  }
}

// Redux
// Get data from store and add to props
const mapStateToProps = store => ({
  winnersFeed: store.winnersFeed,
  games: store.games,
})
// Pass actionCreators into props
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)
