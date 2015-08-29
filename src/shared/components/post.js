import React from 'react';

export default class Post extends React.Component {
  render() {
    
    let { title, body } = this.props.activePost;

    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}
