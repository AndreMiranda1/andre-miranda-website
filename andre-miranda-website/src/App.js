import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
        <Layout>
          <Route path="/" render={() => <p>Work in Progress!</p>} />
        </Layout>
    </div>
  );
}

export default App;
