import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import LanguageSwitcher from './LanguageSwitcher';
import Button from '../Button';

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: end;
  align-items: center;
  grid-gap: 16px;
  .responsive {
    display: none;
  }
  .fixed {
    display: block;
  }
  @media only screen and (max-width: 940px) {
    & {
      grid-template-columns: repeat(2, auto);
    }
    .responsive {
      display: block;
    }
    .fixed {
      display: none;
    }
  }
`;

const Menu = ({ intl, onShowOverlay }) => (
  <StyledMenu>
    <div className={'fixed'}>
      <Button to="/">{intl.formatMessage({ id: 'Start' })}</Button>
    </div>
    <div className={'fixed'}>
      <Button to="/games">{intl.formatMessage({ id: 'Games' })}</Button>
    </div>
    <div className={'fixed'}>
      <Button to="/credits">{intl.formatMessage({ id: 'Credits' })}</Button>
    </div>
    <div className={'fixed'}>
      <Button to="/qa">{intl.formatMessage({ id: 'Q&A' })}</Button>
    </div>
    <div className={'responsive'}>
      <Button onClick={() => onShowOverlay()}>M</Button>
    </div>
    <div>
      <LanguageSwitcher />
    </div>
  </StyledMenu>
);

Menu.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(Menu);
