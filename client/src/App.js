import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import MainBar from './components/layout/MainBar/MainBar';
import Home from './components/pages/Home.js';
import Trends from './components/pages/Trends';
import MyLibrary from './components/pages/MyLibrary';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app-wrapper'>
        <Router>
          <MainBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/trends' component={Trends} />
            <Route path='/mylibrary' component={MyLibrary} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
