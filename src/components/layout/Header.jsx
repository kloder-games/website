import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Menu from './Menu';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 960px auto;
  @media only screen and (max-width: 940px) {
    & {
      grid-template-columns: auto auto auto;
    }
  }
  justify-items: stretch;
  padding: 16px 0 16px 16px;
  box-shadow: 0px 8px 18px 2px rgba(0,0,0,.1);
  z-index: 100;
`;

const StyledInnerHeader = styled.div`
  display: grid;
  grid-template-columns: 343px 1fr;
  @media only screen and (max-width: 850px) {
    & {
      grid-template-columns: 220px 1fr;
      width: 100vw;
    }
  }
  width: 100%;
  h1 {
    margin: 0;
    line-height: 0;
    a {
      text-decoration: none;
    }
  }
  margin-bottom: -1px;
`;

const Header = ({ siteTitle, onShowOverlay }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 64, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      logoSmall: file(relativePath: { eq: "logo-small.png" }) {
        childImageSharp {
          fixed(width: 220, height: 78, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <StyledHeader>
      <div></div>
      <StyledInnerHeader>
        <h1>
          <Link to={'/'}>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={siteTitle}
              height="64"
            />
          </Link>
        </h1>
        <Menu onShowOverlay={onShowOverlay} />
      </StyledInnerHeader>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default injectIntl(Header);
