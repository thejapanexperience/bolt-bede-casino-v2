// Packages
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

// Library
import { GamesListHO } from '@bedegaming/bolt-v2';

// Components
import GameItem from '../GameItem';

const Loading = keyframes`
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.greyLight};
  box-shadow: ${props => props.theme.boxShadows.normal};
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  margin: 3rem 0;
  padding: 3rem;
  perspective: 300rem;
`;

const LoadingGameItem = styled.div`
  animation: ${Loading} 2s ease 0s infinite both;
  background-color: #eee;
  border-radius: 5px;
  height: 25rem;
`;

const GamesList = ({ className, games }) =>
  games.length ? (
    <Container>
      {games.map((game, i) => (
        <GameItem key={i} game={game} style={{ animationDelay: `${i * 100}ms` }} />
      ))}
    </Container>
  ) : (
    <Container>
      {Array.apply(null, Array(12)).map((item, i) => {
        return <LoadingGameItem style={{ animationDelay: `${i * 50}ms` }} />;
      }, this)}
    </Container>
  );

const StyledGamesList = GamesListHO(GamesList);
export default () => <StyledGamesList />;
