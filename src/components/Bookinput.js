/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Bookinput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handletitle = (e) => {
    setTitle(e.target.value);
  };

  const categoryPick = ['Action', 'cybercrime', 'blackhat', 'defcon', 'whitehat', 'Grayhat'];
  const onCategoryPick = (e) => {
    setCategory(e.target.value);
  };

  const handleauthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const Submit = (e) => {
    const item_id = uuidv4();
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
    <div className="formdiv">
      <h3>ADD NEW BOOK</h3>
      <form action="#" onSubmit={Submit}>
        <input type="text" value={title} placeholder="book title" onChange={handletitle} className="input" />
        <input type="text" value={author} placeholder="author" onChange={handleauthor} className="input" />
        <select className="cat" name="Category" onClick={onCategoryPick}>
          {categoryPick.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit" className="subm">submit</button>
      </form>
    </div>
  );
}

export default Bookinput;
