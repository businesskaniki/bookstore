/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Bookinput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handletitle = (e) => {
    setTitle(e.target.value);
  };

  const handleauthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const Submit = (e) => {
    const item_id = uuidv4();
    const category = 'category';
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const book = {
        item_id, title, author, category,
      };
      dispatch(
        addBook(book),
      );
    } else {
      return;
    }
    setTitle('');
    setAuthor('');
  };
  return (
    <form action="#" onSubmit={Submit}>
      <input type="text" value={title} placeholder="book title" onChange={handletitle} />
      <input type="text" value={author} placeholder="auther" onChange={handleauthor} />
      <button type="submit">submit</button>
    </form>
  );
}

export default Bookinput;
