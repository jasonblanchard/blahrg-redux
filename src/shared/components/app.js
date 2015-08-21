import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to='app'>Blahrg</Link></h1>
        <nav>
          <ul>
            <li><Link to='about'>About</Link></li>
          </ul>
        </nav>
        <RouteHandler/>
      </div>
    );
  }
}
