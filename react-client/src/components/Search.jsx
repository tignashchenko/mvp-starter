import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.input);
  }

  render() {
    return (
      <div>
      Enter a book title: <input value={this.state.input} onChange={this.onChange.bind(this)} />
    <button onClick={this.search.bind(this)}>Add books!</button>
      </div>
    )
  }
}

export default Search;
