// @flow

// Packages
import React from 'react';
import styled from 'styled-components';

// Gatsby

// Library
import { LoginHO } from '@bedegaming/bolt-v2';

// Components
import Button from '../../Button';

// Props
type Props = {
  handleChange: Function,
  submitLogin: Function,
  closeModals: Function,
  className: string,
  password: string,
  username: string,
};

const Login = (props: Props) => {
  const { className, handleChange, submitLogin, password, username, closeModals } = props;

  return (
    <div className={className}>
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
            primary="primary"
            onClick={submitLogin}
            title="Log In"
          />

          <Button
            type="button"
            className="closeButton"
            primary="primary"
            onClick={closeModals}
            title="X"
          />
        </div>
      </div>
    </div>
  );
};

const UnstyledLoginModal = LoginHO(Login);

// Styled Components Layout
const LayoutLoginModal = styled(UnstyledLoginModal)`
  position: absolute;
  top: 8rem;
  left: 0;
  background-color: pink;
  width: 100%;
  height: calc(100% - 8rem);
  padding: 3rem;
  z-index: 500;
`;
// Styled Components Styling
const StyledLoginModal = styled(LayoutLoginModal)``;

export default () => <StyledLoginModal />;
