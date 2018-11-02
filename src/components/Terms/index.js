// Packages
import React from 'react';
import styled from 'styled-components';

// Gatsby

// Library
import { TermsHO, languageSelector } from '@bedegaming/bolt-v2';

// Components

// Language Support
import { en_GB, en_US } from './language';

// Make available to children
const Terms = props => {
  const { className, language } = props;

  const lang = languageSelector(language, { en_GB, en_US });

  console.log(lang.terms);

  return <div className={className}>{lang.terms}</div>;
};

const UnstyledTerms = TermsHO(Terms);

// Styled Components Layout
const LayoutTerms = styled(UnstyledTerms)``;
// Styled Components Styling
const StyledTerms = styled(LayoutTerms)``;

export default () => <StyledTerms />;
