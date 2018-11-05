// @flow

// Packages
import React from 'react';
import styled from 'styled-components';

// Library
import { RegistrationHO } from '@bedegaming/bolt-v2';

// Components
import { Button } from '../../';

const Container = styled.div`
  position: absolute;
`;

// Props
type Props = {
  handleChange: Function,
  submitRegistration: Function,
  closeModals: Function,
  className: string,
  password: string,
  username: string,
};

const Registration = ({
  className,
  handleChange,
  submitRegistration,
  password,
  username,
  closeModals,
}: Props) => {
  return (
    <Container className={className}>
      <div>
        <h1>Register</h1>
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
          <Button type="button" primary onClick={submitRegistration} title="Register" />
          <Button type="button" onClick={closeModals} title="X" />
        </div>
      </div>
    </Container>
  );
};

const StyledRegistrationModal = RegistrationHO(Registration);

export default () => <StyledRegistrationModal />;
