// @flow
import React from 'react'
import styled from 'styled-components'

// Library
import { ModalsHO } from '@bedegaming/bolt-v2'

// Components
import LoginModal from './LoginModal'
import RegistrationModal from './RegistrationModal'

const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(3px);
  height: 100%;
  left: 0;
  opacity: ${props => props.isVisible ? 1 : 0};
  pointer-events: ${props => props.isVisible ? 'all' : 'none'};
  position: fixed;
  top: 0;
  transition: all 300ms ease;
  width: 100%;
  z-index: 10;
`

const Modals = ({ modals }) => (
  <ModalOverlay isVisible={modals !== 'none'}>
    {
      (() => {
        switch (modals) {
          case 'loginModal':
            return <LoginModal />

          case 'registrationModal':
            return <RegistrationModal />
          default:
            return null;
        }
      })()
    }
  </ModalOverlay>
)

const StyledModals = ModalsHO(Modals)
export default () => <StyledModals />
