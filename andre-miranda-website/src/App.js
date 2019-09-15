import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';

function App() {
  return (
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/skills" exact component={Skills} />
      </Layout>
  );
}

export default App;
