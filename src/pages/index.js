import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/layout/SEO';
import KpiGrid from '../components/home/KpiGrid';
import Container from '../components/Container';
import Slider from '../components/home/Slider';

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Start' })} />
    <Slider games={data.allMarkdownRemark.edges.map(x => x.node.frontmatter)} />
    <Container featured={true}>
      <KpiGrid />
    </Container>
  </Layout>
);

export default injectIntl(IndexPage);

export const query = graphql`
  query GamesForHomeQuery($locale: String) {
    allMarkdownRemark(
      filter: { frontmatter: { locale: { eq: $locale }, published: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            tagline
            slug
            bg {
              childImageSharp {
                original {
                  src
                }
              }
            }
            logo {
              childImageSharp {
                fixed(
                  height: 120,
                  quality: 100,
                  fit: CONTAIN,
                  background: "transparent"
                ) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
