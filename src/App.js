import React, { Component } from 'react';

import Header from './components/Header'
import PopularShots from './pages/PopularShots'
import ShotPage from './pages/ShotPage'

import { BrowserRouter, Match } from 'react-router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />

          <Match pattern="/" exactly component={PopularShots} />
          <Match pattern="/shot/:id" component={ShotPage} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
