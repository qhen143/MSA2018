import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        <div className = 'outer' >
          <div className="containers">
            <h1>(◕‿◕✿)</h1>
            <h2> Welcome to CryptoChecc! </h2>
            <p> This site lets you check the current price of cryptocurrency in any currency.</p>
            <p> Thanks to https://min-api.cryptocompare.com/ for providing free access to their API for this demo. </p>
          </div>
          </div>
      </div>
    </div>
    );
  }
}