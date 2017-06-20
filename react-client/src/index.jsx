import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BookList from './components/BookList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/books',
      method: 'GET',
      success: (data) => {
        this.setState({
          books: JSON.parse(data)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search(input) {
    $.ajax({
      url: '/books/import',
      method: 'POST',
      data: {query: input},
      success: (res) => {
        var books = JSON.parse(res);
        this.setState({books: books});
      },
      error: (err) => {
        throw err;
      }
    });
  }

  render () {
    return (<div>
      <h1>Book List</h1>
      <BookList books={this.state.books} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
