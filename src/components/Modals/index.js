import React from 'react';
import styled from 'styled-components';

// Library
import { ModalsHO } from '@bedegaming/bolt-v2';

// Components
import LoginModal from './LoginModal';
import RegistrationModal from './RegistrationModal';

const Modals = ({ modals }) => {
  if (modals === 'loginModal') {
    return <LoginModal />;
  }

  if (modals === 'registrationModal') {
    return <RegistrationModal />;
  }
};

const StyledModals = ModalsHO(Modals);
export default () => <StyledModals />;
