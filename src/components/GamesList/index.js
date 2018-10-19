import React from 'react'
import styled from 'styled-components'

import GameItem from './GameItem'

const Container = styled.div`
  border: 1px solid #f9f9f9;
  box-shadow: 0 4px 10px rgba(22, 20, 20, 0.1);
  display: flex;
  margin: 3rem 0;
`

export default ({ games }) => (
  <Container>
    {
      games.map((game, i) =>
        <GameItem
          key={i}
          game={game}
        />
      )
    }
  </Container>
)
