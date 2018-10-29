import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const GameItem = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadows.normal};
  flex: 0 0 calc(25% - 2rem);
  overflow: hidden;
  padding-bottom: 7rem;
  position: relative;
  text-decoration: none;
  transition-duration: 300ms;
  transition-property: box-shadow, transform;
  transition-timing-function: ease;

  &:last-child {
    flex-grow: 0;
  }

  &:hover {
    box-shadow: ${props => props.theme.boxShadows.hover};
    transform: translateY(-0.5rem);
  }
`;

const Image = styled.img`
  display: block;
  flex: 1;
  width: 100%;
`;

const Overlay = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.transparentWhite};
  border-radius: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 7rem;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  transition: max-height 500ms ease, transform 500ms ease;
  width: 100%;
  z-index: 1;

  ${GameItem}:hover & {
    max-height: 15rem;
  }
`;

const OverlayText = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const OverlayButton = styled(Button)`
  height: 1rem;
  min-width: unset;
  transform: scale(0.8);
  padding: 0;
  transition: all 300ms ease;
  width: 1rem;

  span {
    left: 50%;
    opacity: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
    position: absolute;
  }

  ${GameItem}:hover & {
    height: 5.2rem;
    transform: scale(1);
    width: 14.2rem;

    span {
      opacity: 1;
    }
  }
`;

export default ({ game: { catalogueName, images } }) => {
  const thumbnail = images.filter(image => image.label === 'Thumbnail' || image.label === 'thumb');

  return (
    <GameItem onClick={() => handleClick(catalogueName)}>
      <Image src={thumbnail[0].url} />
      <Overlay>
        <OverlayText>{catalogueName}</OverlayText>
        <OverlayButton primary title="Play" />
      </Overlay>
    </GameItem>
  );
};

const handleClick = catalogueName => {
  console.log(catalogueName);
};
