import React from 'react';

class DeleteBookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.input);
  }

  render() {
    return (
      <div>
        <input placeholder="Enter a book title..." value={this.state.input} onChange={this.onChange.bind(this)} />
        <button onClick={this.search.bind(this)}>Delete book!</button>
      </div>
    )
  }
}

export default DeleteBookItem;
