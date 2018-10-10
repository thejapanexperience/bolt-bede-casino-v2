import React from 'react'
import styled from 'styled-components'
import { Button as UnstyledButton } from 'tlob-library'

const Button = styled(UnstyledButton)`
  border: 3px solid #e21455;
  border-radius: 5px;
  color: #e21455;
  font-size: 2rem;
  font-weight: 700;
  min-width: 14rem;
  overflow: hidden;
  padding: 1.5rem 2.5rem;
  position: relative;
  text-transform: uppercase;
`

export default ({ className, title }) => (
  <Button
    className={className}
    title={title}
  />
)
