// @flow

// Packages
import React from 'react';
import styled from 'styled-components';

// Library
import { LoginHO } from '@bedegaming/bolt-v2';

// Components
import { Button } from '../../';

const Container = styled.div`
  position: absolute;
`;

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
  <Container className={className}>
    <div className="container h1Container">
      <h1>Login </h1>
    </div>
    <div className="container formContainer">
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
  </Container>
);

const StyledLoginModal = LoginHO(Login);

export default () => <StyledLoginModal />;
