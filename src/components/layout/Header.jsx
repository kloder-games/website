import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link, injectIntl } from 'gatsby-plugin-intl';

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
  border-bottom: 16px solid #991111;
  > div:first-child {
    background-color: var(--primary-color);
  }
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
  const logo = require('../../images/logo.png');
  const logoSmall = require('../../images/logo-small.png');
  return (
    <StyledHeader>
      <div></div>
      <StyledInnerHeader>
        <h1>
          <Link to={'/'}>
            <picture>
              <source
                media="(max-width: 849px)"
                srcSet={logoSmall}
                width="220"
                height="78"
              />
              <source
                media="(min-width: 850px)"
                srcSet={logo}
                width="343"
                height="78"
              />
              <img src={logo} alt={siteTitle} />
            </picture>
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
