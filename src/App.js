import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Bands</h1>
        </div>
        <hr />
        <BandsContainer />
      </div>
    );
  }
};

export default App;
