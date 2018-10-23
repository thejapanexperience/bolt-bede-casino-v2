// Packages
import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { GamesListHO } from '@bedegaming/tlob-library'

// Components
import GameItem from './GameItem'

const Container = styled.div`
  border: 1px solid #f9f9f9;
  box-shadow: 0 4px 10px rgba(22, 20, 20, 0.1);
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
`

const GamesList = props => {
  const { games } = props

  if (games.length) {
    return (
      <Container>
        {games.map((game, i) => (
          <GameItem key={i} game={game} />
        ))}
      </Container>
    )
  }

  return <div>No Games</div>
}

const UnstyledGamesList = GamesListHO(GamesList)

// Styled Components Layout
const LayoutGamesList = styled(UnstyledGamesList)``
// Styled Components Styling
const StyledGamesList = styled(LayoutGamesList)``

export default () => <StyledGamesList />
