import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// Theme imports
import theme from '../../theme';
import { Header, Modals } from '../';

// Global styles
const GlobalStyle = createGlobalStyle`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 10px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Content = styled.main`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  justify-content: center;
  margin: 0px auto;
  padding: 0px 1.0875rem 1.45rem;
`;

const Wrapper = styled.div`
  max-width: 130rem;
  width: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            <Modals />
            <Wrapper>{children}</Wrapper>
          </Content>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
