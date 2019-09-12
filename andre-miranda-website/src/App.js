import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Bio from './components/Bio/Bio';

function App() {
  return (
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/bio" exact component={Bio} />
      </Layout>
  );
}

export default App;
