import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainBar from './components/layout/MainBar/MainBar';
import SearchBar from './components/layout/SearchBar/SearchBar';
import Home from './components/pages/Home.js';
import Trends from './components/pages/Trends';
import MyLibrary from './components/pages/MyLibrary';
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Router>
        <MainBar />
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/trends' component={Trends} />
          <Route path='/mylibrary' component={MyLibrary} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
