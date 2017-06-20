import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => (
  <div>
    {props.books.length === 1 ? 'There is ' + props.books.length + ' book.' : 'There are ' +  props.books.length + ' books (sorted by user rating).'}
    { props.books.map((book, index) => <BookItem book={book} key={index}/>)}
  </div>
)

export default BookList;
