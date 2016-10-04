import React, { Component } from 'react';

import Header from './components/Header'
import PopularShots from './pages/PopularShots'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PopularShots />
      </div>

    );
  }
}

export default App;
