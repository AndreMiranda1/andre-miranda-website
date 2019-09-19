import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Background from './components/Background/Background';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import FindMe from './components/FindMe/FindMe';


function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/bio" exact component={Bio} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/professional-experience" exact component={ProfessionalExperience} />
          <Route path="/background" exact component={Background} />
          <Route path="/personal-projects" exact component={PersonalProjects} />
          <Route path="/find-me" exact component={FindMe} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Layout>
  );
}

export default App;
