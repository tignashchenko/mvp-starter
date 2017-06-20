import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BookList from './components/BookList.jsx';
import Search from './components/Search.jsx';
import DeleteBookItem from './components/DeleteBookItem.jsx';

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
      url: '/books',
      method: 'POST',
      data: {query: input},
      success: (res) => {
        var books = JSON.parse(res);
        this.setState({books: books});
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  searchToDelete(input) {
    $.ajax({
      url: '/books/delete',
      method: 'POST',
      data: {query: input},
      success: (res) => {
        var books = JSON.parse(res);
        this.setState({books: books});
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  delete() {
    $.ajax({
      url: '/books',
      method: 'DELETE',
      success: (res) => {
        var books = JSON.parse(res);
        this.setState({books: books});
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  render () {
    return (<div>
      <Search onSearch={this.search.bind(this)} />
      <DeleteBookItem onSearch={this.searchToDelete.bind(this)} />
      <button type="button" onClick={this.delete.bind(this)}>Remove all books</button>
      <h1>Book List (sorted by user ratings)</h1>
      <BookList books={this.state.books} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
