import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Ngip from './components/ngip/Ngip';
import Integrate from './components/Integration/Integration';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/ngip">
        <Ngip/>
      </Route>
      <Route exact path="/integrate">
        <Integrate/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
