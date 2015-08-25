import React from 'react';
import { RouteHandler, Link } from 'react-router';
import PostsIndex from './posts_index';

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

        <PostsIndex posts={[
          {
            id: 1,
            title: 'First post',
            body: 'asdf',
            featured: true
          },
          {
            id: 2,
            title: 'second post',
            body: 'zcvzc',
            featured: false
          }
        ]}>
        </PostsIndex>

        <RouteHandler/>
      </div>
    );
  }
}
