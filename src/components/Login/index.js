// Packages
import React from 'react'
import styled from 'styled-components'

// Gatsby

// Library
import { HOLogin, Button } from '@bedegaming/tlob-library'

// Components
// import Button from '../Button'

// Make available to children
const Login = props => {
  const { className, handleSubmit, handleChange, password, username } = props

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
        <Button
          className="submitButton"
          onClick={handleSubmit}
          title="Log In"
        />
      </div>
    </div>
  )
}

const UnstyledLogin = HOLogin(Login)

// Styled Components Layout
const LayoutLogin = styled(UnstyledLogin)`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  .container {
    display: flex;
    width: 100%;
  }
`
// Styled Components Styling
const StyledLogin = styled(LayoutLogin)``

export default () => <StyledLogin />
