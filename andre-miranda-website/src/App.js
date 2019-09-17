import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';

function App() {
  return (
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/professional-experience" exact component={ProfessionalExperience} />
      </Layout>
  );
}

export default App;
