// Packages
import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { LoginHO } from '@bedegaming/bolt-v2'

// Components
import Button from '../Button'

// Make available to children
const Login = props => {
  const {
    className,
    handleChange,
    submitLogin,
    handleGetUserData,
    password,
    username,
  } = props

  return (
    <div className={className}>
      <div className="container h1Container">
        <h1>Login </h1>
      </div>
      <div className="container formContainer">
        <form>
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
        </form>
        <Button className="submitButton" onClick={submitLogin} title="Log In" />
        <Button
          className="submitButton"
          onClick={handleGetUserData}
          title="Get Transactions"
        />
      </div>
    </div>
  )
}

const UnstyledLogin = LoginHO(Login)

// Styled Components Layout
const LayoutLogin = styled(UnstyledLogin)``
// Styled Components Styling
const StyledLogin = styled(LayoutLogin)``

export default () => <StyledLogin />
