import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home page'>
      <p>Your home page is here!!</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/dog.jpeg'
      />
    </Layout>
  );
};

export default IndexPage;
