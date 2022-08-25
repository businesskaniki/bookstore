/* eslint-disable default-param-last */
// import { v4 as uuidv4 } from 'uuid';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FHkJQhIeALF8h4pgvNyg/books';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.content];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    case `${GET_BOOKS}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    return Object.entries(response);
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post(BASE_URL, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'category',
    });
    return {
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: 'category',
        }],
      ],
    };
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return { id };
  },
);

export const addnewBook = (id, title, author) => ({
  type: ADD_BOOK,
  content: {
    id,
    title,
    author,
  },
});

export const removenewBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
