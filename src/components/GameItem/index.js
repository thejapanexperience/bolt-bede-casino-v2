import React from 'react'
import styled from 'styled-components'
import TrackVisibility from 'react-on-screen'

import Button from '../Button'

const GameItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(22, 20, 20, 0.05);
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
    box-shadow: 0 0.8rem 2rem rgba(22, 20, 20, 0.1);
    transform: translateY(-0.5rem);
  }
`

const Image = styled.img`
  display: block;
  flex: 1;
  width: 100%;
`
const BlurryImage = styled.img`
  -webkit-filter: invert(0.8);
  filter: invert(0.8);
  position: absolute;
  opacity: 1;
  transition: opacity 1s;
  width: 100%;
`

const VisibleImage = ({ isVisible, src }) => {
  if (isVisible) {
    return <BlurryImage style={{ opacity: '0' }} src={src} />
  }
  return <BlurryImage src={src} />
}

const Overlay = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
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
`

const OverlayText = styled.a`
  color: #3e3135;
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

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
`

export default ({ game: { catalogueName, images } }) => {
  const thumbnail = images.filter(
    image => image.label === 'Thumbnail' || image.label === 'thumb'
  )

  return (
    <GameItem onClick={() => handleClick(catalogueName)}>
      <TrackVisibility>
        <VisibleImage src={thumbnail[0].url} />
      </TrackVisibility>
      <Image src={thumbnail[0].url} />
      <Overlay>
        <OverlayText>{catalogueName}</OverlayText>
        <OverlayButton primary title="Play" />
      </Overlay>
    </GameItem>
  )
}

const handleClick = catalogueName => {
  console.log(catalogueName)
}
