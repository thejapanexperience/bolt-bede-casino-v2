// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actionCreators
class BoltGamesTest extends Component {
  render() {
    const { games } = this.props
    console.log(games)

    return <div />
  }
}

// Redux
// Get data from store and add to props
const mapStateToProps = store => ({
  games: store.games,
})
// Pass actionCreators into props
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoltGamesTest)
