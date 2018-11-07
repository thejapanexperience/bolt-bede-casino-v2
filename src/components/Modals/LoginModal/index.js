// @flow

// Packages
import React from 'react';
import styled from 'styled-components';

// Library
import { LoginHO } from '@bedegaming/bolt-v2';

// Components
import { Button } from '../../';

const ModalContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadows.normal};
  left: 50%;
  padding: 3rem;
  position: fixed;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
`

// Props
type Props = {
  handleChange: Function,
  submitLogin: Function,
  closeModals: Function,
  className: string,
  password: string,
  username: string,
};

const Login = ({
  className,
  handleChange,
  submitLogin,
  password,
  username,
  closeModals,
}: Props) => (
  <ModalContainer>
    <div>
      <h1>Login </h1>
    </div>
    <div>
      <div>
        <label>
          User Name:
          <input type="text" name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={password} onChange={handleChange} />
        </label>
        <Button
          type="button"
          className="submitButton"
          primary
          onClick={submitLogin}
          title="Log In"
        />

        <Button type="button" className="closeButton" onClick={closeModals} title="X" />
      </div>
    </div>
  </ModalContainer>
);

const StyledLoginModal = LoginHO(Login);
export default () => <StyledLoginModal />;
