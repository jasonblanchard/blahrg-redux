import React from 'react';

export default class NewPost extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {title: '', body: '', featured: false, tags: []};
  }

  handleChange(e) {

    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit() {
    this.props.onAddPost(this.state);
    this.props.router.transitionTo('blog');
  }

  render() {
    return(
      <div>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            id='title'
            type='text'
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          >
          </input>
        </div>

        <div>
          <label htmlFor='body'>Title:</label>
          <textarea
            id='body'
            type='text'
            value={this.state.body}
            onChange={this.handleChange.bind(this)}
          >
          </textarea>
        </div>

        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}
