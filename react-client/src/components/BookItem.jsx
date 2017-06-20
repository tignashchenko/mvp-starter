import React from 'react';

const BookItem = (props) => (
  <div>
    <br/>
  <img src={props.book.cover} /><br/>
  <a href={props.book.link}> Book title: { props.book.title } </a><br/>
  Author: { props.book.author }<br/>
  User Rating: { props.book.rating }<br/>
  </div>
)

export default BookItem;
