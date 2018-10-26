// Packages
import React from 'react';
import styled from 'styled-components';

const primaryGradientFrom = '#ff345f';
const primaryGradientTo = '#ff9268';

const Button = styled.button`
  background-image: ${props =>
    props.primary
      ? `linear-gradient(90deg, ${primaryGradientFrom} 0%, ${primaryGradientTo} 100%)`
      : null};
  border: ${props => (props.primary ? 'none' : '3px solid #e21455')};
  border-radius: 5px;
  color: ${props => (props.primary ? '#fff' : '#e21455')};
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
