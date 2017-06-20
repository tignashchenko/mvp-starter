import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => (
  <div>
    {props.books.length === 1 ? 'There is ' + props.books.length + ' book in your collection.' : 'There are ' +  props.books.length + ' books in your collection.'} <br />
    { props.books.map((book, index) => <BookItem book={book} key={index}/>)}
  </div>
)

export default BookList;
