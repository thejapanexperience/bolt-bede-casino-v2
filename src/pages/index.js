// Packages
import React from 'react';

// Components
import Layout from '../components/Layout';
import Modals from '../components/Modals';
import GamesList from '../components/GamesList';

const IndexPage = () => (
  <Layout>
    <Modals />
    <GamesList />
  </Layout>
);

export default IndexPage;
