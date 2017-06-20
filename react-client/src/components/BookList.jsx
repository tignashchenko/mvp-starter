import React from 'react';
import BookItem from './BookItem.jsx';

const BookList = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.books.length } items.
    { props.books.map((book, index) => <BookItem book={book} key={index}/>)}
  </div>
)

export default BookList;
