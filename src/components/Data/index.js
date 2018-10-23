// Packages
import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { Data as UnstyledData } from '@bedegaming/tlob-library'

// Styled Components Layout
const LayoutData = styled(UnstyledData)`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  .container {
    display: none;
    width: 100%;

    &.h1Container {
      background-color: powderblue;
      display: flex;
      order: 1;
      width: 100%;
    }

    &.userSessionContainer {
      background-color: pink;
      display: flex;
      order: 2;
      width: 50%;
    }

    &.winnersFeedContainer {
      background-color: orange;
      display: flex;
      order: 3;
      width: 25%;
    }

    &.gamesContainer {
      background-color: yellow;
      display: flex;
      order: 4;
      width: 25%;
    }

    .content {
      margin: 0 auto auto;
      width: 100%;
    }
  }
`
// Styled Components Styling
const StyledData = styled(LayoutData)`
  .container {
    text-align: center;
  }

  .h1Container {
    padding: 1rem;
    h1 {
      margin: auto;
    }
  }

  .userSessionContainer {
    text-align: left;

    h3 {
      text-align: center;
    }
  }

  .pre {
    padding: 1rem;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`

export default () => <StyledData />
