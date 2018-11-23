// Packages
import React from 'react';
import styled from 'styled-components';

// Library
import { LoginHO } from '@bedegaming/bolt-v2';

// Components
import Button from '../Button';

const Container = styled.div``;

// Make available to children
const Login = ({ className, handleChange, submitLogin, handleGetUserData, password, username }) => (
  <Container className={className}>
    <div>
      <h1>Login</h1>
    </div>
    <div>
      <form>
        <label>
          User Name:
          <input type="text" name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={password} onChange={handleChange} />
        </label>
      </form>
      <Button onClick={submitLogin} title="Log In" />
      <Button onClick={handleGetUserData} title="Get Transactions" />
    </div>
  </Container>
);

const StyledLogin = LoginHO(Login);

export default () => <StyledLogin />;
