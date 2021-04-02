import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import AddFruits from './components/AddFruits/AddFruits';


function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/home">
         <Home/>
        </Route>
        <Route path="/addFruits">
          <AddFruits/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
 
  </Router>
  );
}

export default App;
