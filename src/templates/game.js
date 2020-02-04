import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import Container from '../components/Container';
import Markdown from '../components/Markdown';
import Header from '../components/game/Header';
import Slider from '../components/game/Slider';
import Marketplaces from '../components/game/Marketplaces';
import Features from '../components/game/Features';
import Social from '../components/Social';
import Repository from '../components/game/Repository';

const StyledGame = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  grid-gap: 32px;
  @media only screen and (max-width: 940px) {
    & {
      grid-template-columns: auto;
    }
  }
`;

const Game = ({ data }) => {
  const game = data.gamesYaml;
  return (
    <Layout>
      <SEO title={game.title} />
      <Slider {...game} />
      <Container>
        <StyledGame>
          <div>
            <Header {...game} />
            <Markdown text={game.description} />
            <Social />
          </div>
          <div>
            {game.marketplaces ? <Marketplaces {...game} /> : ''}
            {game.features ? <Features {...game} /> : ''}
            {game.github ? <Repository {...game} /> : ''}
          </div>
        </StyledGame>
      </Container>
    </Layout>
  );
};

export default Game;

export const query = graphql`
  query($slug: String!, $locale: String) {
    gamesYaml(slug: { eq: $slug }, locale: { eq: $locale }) {
      slug
      title
      date
      tagline
      marketplaces
      youtube
      images
      categories
      description
      features
      orientation
      github
    }
  }
`;
