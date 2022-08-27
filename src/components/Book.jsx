import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Book({ book, remove }) {
  // console.log(book);
  const { title, author } = book;
  return (
    <li id={book.item_id} key={book.item_id} className="bookLi">
      <div className="book">
        <div className="bookContainer">
          <small className="category">fiction</small>
          <h3 className="title">{title}</h3>
          <h6 className="author">{author}</h6>
        </div>
        <div>
          <button type="button" className="comment">Comments</button>
          <button type="button" className="comment" onClick={remove}>Remove</button>
          <button type="button" className="comment">Edit</button>
        </div>
      </div>
      <div className="completediv">
        <div className="circle-wrap">
          <div className="inside-circle" />
          <div className="progress" />
        </div>
        <div className="text">
          <p className="percent">80%</p>
          <p className="complete">complete</p>
        </div>
      </div>
      <div className="chapters">
        <span className="curchap">Current Chapter</span>
        <span className="chap">Chapter</span>
        <button type="button" className="update">Update Progress</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object,
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
