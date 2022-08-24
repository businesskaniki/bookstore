import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, remove }) {
  const { id, title, author } = book;
  return (
    <li id={id} key={id}>
      <div className="book">
        <p>
          <span>fiction</span>
          <span>{title}</span>
          <span>{author}</span>
        </p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={remove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <p>
          <span>50%</span>
          <span>Complete</span>
        </p>
      </div>
      <div>
        <p>
          <span>Current Chapter</span>
          <span>Chapter</span>
          <button type="button">Update Progress</button>
        </p>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf,
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
