const addBook = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// eslint-disable-next-line default-param-last
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [
        ...state,
        action.content,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

export const addnewBook = (id, title, author) => ({
  type: addBook,
  content: {
    id,
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
