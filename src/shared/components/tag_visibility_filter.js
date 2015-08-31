import React from 'react';

export default class TagVisibilityFilter extends React.Component {

  handleChangeTagInput(e) {
    let input = React.findDOMNode(this.refs.tagInput).value;
    let selectedTags = input.split(',').map(tag => tag.trim());

    let { allTags } = this.props;

    let tagIds = allTags.filter(tag => selectedTags.includes(tag.name))
    .map(tag => tag.id)

    this.props.onChange(tagIds);
  }

  render() {
    return (
      <div>
        <input ref='tagInput' name='tagInput' onChange={this.handleChangeTagInput.bind(this)} type='text'></input>
        <br />
      </div>
    );
  }
}
