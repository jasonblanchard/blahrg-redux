import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        placeholder for post id: {this.props.params.postId}
      </div>
    );
  }
}
