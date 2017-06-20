import React from 'react';

const BookItem = (props) => (
  <div>
    <br/>
  <img src={props.book.cover} /><br/>
  Book title: { props.book.title }<br/>
  Author: { props.book.author }<br/>
  User Rating: { props.book.rating }<br/>
  </div>
)

export default BookItem;
