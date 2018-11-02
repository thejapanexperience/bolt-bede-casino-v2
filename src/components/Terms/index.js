// Packages
import React from 'react';
import styled from 'styled-components';

// Gatsby

// Library
import { TermsHO } from '@bedegaming/bolt-v2';

// Components

// Language Support
import { en_GB, en_US } from './language';

// Make available to children
const Terms = props => {
  const { className, language, languageSelector } = props;

  const lang = languageSelector(language, { en_GB, en_US });
  const termsArray = lang.terms.split('\n');
  const terms = (
    <div>
      {termsArray.map((term, i) => {
        return <p key={i}>{term}</p>;
      })}
    </div>
  );

  return <div className={className}>{terms}</div>;
};

const UnstyledTerms = TermsHO(Terms);

// Styled Components Layout
const LayoutTerms = styled(UnstyledTerms)``;
// Styled Components Styling
const StyledTerms = styled(LayoutTerms)``;

export default () => <StyledTerms />;
