// Packages
import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { RegistrationHO } from '@bedegaming/tlob-library'

// Components
import Button from '../../Button'

// Make available to children
const Registration = props => {
  const { className, handleChange, handleSubmit, password, username } = props

  return (
    <div className={className}>
      <div className="container h1Container">
        <h1>Register </h1>
      </div>
      <div className="container formContainer">
        <div>
          <label>
            User Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Button
            type="button"
            className="submitButton"
            primary="primary"
            onClick={handleSubmit}
            title="Register"
          />

          <Button
            type="button"
            className="closeButton"
            primary="primary"
            onClick={() => props.setModal('none')}
            title="X"
          />
        </div>
      </div>
    </div>
  )
}

const UnstyledRegistrationModal = RegistrationHO(Registration)

// Styled Components Layout
const LayoutRegistrationModal = styled(UnstyledRegistrationModal)`
  position: absolute;
  top: 8rem;
  left: 0;
  background-color: pink;
  width: 100%;
  height: calc(100% - 8rem);
  padding: 3rem;
  z-index: 500;
`
// Styled Components Styling
const StyledRegistrationModal = styled(LayoutRegistrationModal)``

export default () => <StyledRegistrationModal />
