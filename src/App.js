import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ExperimentLinks from './components/ExperimentLinks';
import ExperimentMetadata from './components/ExperimentMetadata';
import CanvasContainer from './components/CanvasContainer/';

import './App.css';

import experiments from './experiments/';

const NotFound = ({ id }) => {
  return (
    <h3 style={{ color: 'red' }}>
      Experiment <div style={{ display: 'inline', color: 'white' }}>{id}</div>{' '}
      not found.
    </h3>
  );
};

const Experiment = ({ id, fullScreen }) => {
  
  const experiment = experiments.find(e => e.id === id);

  if (!experiment) {
    return <NotFound id={id} />;
  }

  const { component: Component, metadata } = experiment;

  const headerContent = fullScreen ? 
      <div>
        <ExperimentMetadata id={id} metadata={metadata} fullscreen/>
      </div>
      :
      <div>
        <div className="App__Header">
        <br />
        <h2>Experiments in react-three-fiber</h2>
        <ExperimentLinks experiments={experiments} />
        </div>
        <ExperimentMetadata id={id} metadata={metadata} />
      </div>
 

  return (
    <div className="App__Content">
      {headerContent}
      <CanvasContainer>
        <Component />
      </CanvasContainer>
    </div>
  );

};

const App = () => {
  return (
    <Router>
      <div className="App">

          <Switch>
            <Route
            path="/experiments/:id/full"
            render={({ match }) => <Experiment id={match.params.id} fullScreen />}
            />
            <Route
              path="/experiments/:id"
              render={({ match }) => <Experiment id={match.params.id} />}
            />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
