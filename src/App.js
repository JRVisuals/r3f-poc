
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useLocation} from "react-router";

import CanvasContainer from './components/CanvasContainer'
import './App.css'

import {SimpleCube} from './experiments/'

const ExperimentList = {
    one: <SimpleCube/>,
    two: <SimpleCube/>,
}

const Home = () => {

    return (
        <div>Home</div>
    )
};


const Experiment = () => {
    let location = useLocation();
    let id = location.pathname.split('/')[2];
    console.log(id);
    let Exp = ExperimentList[id];
    let ExpRender = Exp ?
    <CanvasContainer>{SimpleCube}</CanvasContainer>
    : <div>{id} not found</div>

    return ExpRender
};

const App = () => {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experiment" component={Experiment} />
            </Switch>
        </Router>
    </div>
  )
}
export default App
