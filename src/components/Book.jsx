import React from 'react';
import Bookinput from './Bookinput';

function Book() {
  return (
    <div>
      <Bookinput />
      <ul>
        <li>
          book
          {' '}
          <button type="button">delete</button>
          {' '}
        </li>
        <li>
          book
          {' '}
          <button type="button">delete</button>
          {' '}
        </li>
        <li>
          book
          {' '}
          <button type="button">delete</button>
          {' '}
        </li>
      </ul>
    </div>
  );
}

export default Book;
