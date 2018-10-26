import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { ModalsHO } from '@bedegaming/tlob-library'

// Components
import LoginModal from './LoginModal'
import RegistrationModal from './RegistrationModal'

const Modals = props => {
  const { modals } = props
  if (modals === 'loginModal') {
    return <LoginModal />
  }
  if (modals === 'registrationModal') {
    return <RegistrationModal />
  }
  return <div />
}

const UnstyledModals = ModalsHO(Modals)

// Styled Components Layout
const LayoutModals = styled(UnstyledModals)``
// Styled Components Styling
const StyledModals = styled(LayoutModals)``

export default () => <StyledModals />
