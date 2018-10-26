// Packages
import React from 'react'
import styled from 'styled-components'

// Library
import { GamesListHO } from '@bedegaming/tlob-library'

// Components
import GameItem from '../GameItem'

const Container = styled.div`
  border: 1px solid #f9f9f9;
  box-shadow: 0 4px 10px rgba(22, 20, 20, 0.1);
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  margin: 3rem 0;
  padding: 3rem;
`

const GamesList = ({ className, games }) =>
  games.length ? (
    <Container>
      {games.map((game, i) => (
        <GameItem key={i} game={game} />
      ))}
    </Container>
  ) : (
    <div>No Games</div>
  )

const StyledGamesList = GamesListHO(GamesList)
export default () => <StyledGamesList />
