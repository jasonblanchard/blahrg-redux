import React from 'react';

export default class PostVisibilityFilter extends React.Component {
  
  handleSelect(filter) {
    this.props.onChange(filter);
  }

  render() {
    
    let isSelected = filter => {
      return filter === this.props.activeFilter;
    }

    return (
      <div>
        <input type='radio'
        name='visibility-filter'
        value='SHOW_ALL'
        id='show-all'
        checked={isSelected('SHOW_ALL')}
        onChange={this.handleSelect.bind(this, 'SHOW_ALL')}
      /> <label htmlFor='show-all'>Show All</label>

        <input type='radio'
        name='visibility-filter'
        value='SHOW_FEATURED'
        id='show-featured'
        checked={isSelected('SHOW_FEATURED')}
        onChange={this.handleSelect.bind(this, 'SHOW_FEATURED')}
      /> <label htmlFor='show-featured'>Show Featured</label>
      </div>
    );
  }
}
