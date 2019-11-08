import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import CanvasContainer from './components/CanvasContainer';
import './App.css';

import experiments from './experiments/';

const ExperimentLinks = ({ experiments }) => {
  return (
    <div className="ExperimentLinks">
      {experiments.map(({ id, name }, index) => (
        <NavLink
          key={`experiment-link-${id}`}
          className="ExperimentLinks__Link"
          to={`/experiments/${id}`}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

const NotFound = ({ id }) => {
  return (
    <h3 style={{ color: 'red' }}>
      Experiment <div style={{ display: 'inline', color: 'white' }}>{id}</div>{' '}
      not found.
    </h3>
  );
};

const Experiment = ({ id }) => {
  const experiment = experiments.find(e => e.id === id);

  if (!experiment) {
    return <NotFound id={id} />;
  }

  const { component: Component } = experiment;

  return (
    <CanvasContainer>
      <Component />
    </CanvasContainer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <br />
        <h1>Experiments in</h1>
        <h2>react-three-fiber</h2>
        <ExperimentLinks experiments={experiments} />
        <div className="App__Content">
          <Switch>
            <Route
              path="/experiments/:id"
              render={({ match }) => <Experiment id={match.params.id} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
