import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook, getBooks } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(removeBook(e.target.parentNode.parentNode.parentNode.id));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <Book
          id={book[0]}
          key={book[0]}
          book={book[1][0]}
          remove={onClick}
        />
      ))}
    </ul>
  );
}

export default Books;
