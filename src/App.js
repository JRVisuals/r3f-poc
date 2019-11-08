import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

import CanvasContainer from './components/CanvasContainer';
import './App.css';

import { ExperimentList } from './experiments/';

// TODO : Break this out into a view. Generate a TOC based on barrel?
const Home = () => {
  return (
    <div>
      <br />
      <h1>Experiments in</h1>
      <h2>react-three-fiber</h2>
      <h3>Locations follow this pattern</h3>
      <code>/experiment/_name_</code>
    </div>
  );
};

const getNotFoundMarkup = id => {
  return (
    <div>
      <br />
      <h1>Experiments in</h1>
      <h2>react-three-fiber</h2>
      <h3>Locations follow this pattern</h3>
      <code>/experiment/_name_</code>
      <br />
      <br />
      <h3 style={{ color: 'red' }}>
        Experiment <div style={{ display: 'inline', color: 'white' }}>{id}</div>{' '}
        not found.
      </h3>
      <br />
    </div>
  );
};

const Experiment = () => {
  let location = useLocation();
  let id = location.pathname.split('/')[2];
  let content = ExperimentList[id];

  let ExpRender = content ? (
    <CanvasContainer>{content}</CanvasContainer>
  ) : (
    getNotFoundMarkup(id)
  );

  return ExpRender;
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/experiment" component={Experiment} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
