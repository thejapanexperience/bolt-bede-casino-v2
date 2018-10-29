// Packages
import React from 'react';
import styled from 'styled-components';

// Library
import { GamesListHO } from '@bedegaming/bolt-v2';

// Components
import GameItem from '../GameItem';

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.greyLight};
  box-shadow: ${props => props.theme.boxShadows.normal};
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  margin: 3rem 0;
  padding: 3rem;
`;

const GamesList = ({ className, games }) =>
  games.length ? (
    <Container>
      {games.map((game, i) => (
        <GameItem key={i} game={game} />
      ))}
    </Container>
  ) : (
    <div>No Games</div>
  );

const StyledGamesList = GamesListHO(GamesList);
export default () => <StyledGamesList />;
