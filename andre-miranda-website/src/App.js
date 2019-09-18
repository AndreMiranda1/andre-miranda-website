import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Background from './components/Background/Background';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';

function App() {
  return (
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/professional-experience" exact component={ProfessionalExperience} />
        <Route path="/background" exact component={Background} />
        <Route path="/personal-projects" exact component={PersonalProjects} />
      </Layout>
  );
}

export default App;
