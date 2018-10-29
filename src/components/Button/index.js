// Packages
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-image: ${props =>
    props.primary
      ? `linear-gradient(90deg, ${props.theme.colors.primaryGradientFrom} 0%, ${
          props.theme.colors.primaryGradientTo
        } 100%)`
      : null};
  border: ${props => (props.primary ? 'none' : `3px solid ${props.theme.colors.primary}`)};
  border-radius: 5px;
  color: ${props => (props.primary ? props.theme.colors.white : props.theme.colors.primary)};
  font-size: 2rem;
  font-weight: 700;
  min-width: 14rem;
  overflow: hidden;
  padding: 1.5rem 2.5rem;
  position: relative;
  text-transform: uppercase;
`;

export default ({ className, onClick, primary, title }) => (
  <Button className={className} onClick={onClick} primary={primary}>
    <span>{title}</span>
  </Button>
);
