import React, { Component } from 'react';

import Header from './components/Header'
import PopularShots from './pages/PopularShots'
import ShotPage from './pages/ShotPage'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ShotPage />
      </div>

    );
  }
}

export default App;
