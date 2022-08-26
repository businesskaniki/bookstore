/* eslint-disable default-param-last */
// import { v4 as uuidv4 } from 'uuid';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FHkJQhIeALF8h4pgvNyg/books';

const initialState = [];

export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const data = await fetch(`${BASE_URL}`);
    const response = await data.json();
    const arr = [];
    const keys = Object.keys(response);
    keys.map((key) => (
      arr.push({
        item_id: key,
        title: response[key][0].title,
        author: response[key][0].author,
        category: response[key][0].category,
      })
    ));
    return arr || [];
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post(BASE_URL, book);
    return book;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
);

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => (book.item_id !== action.payload));
    case `${GET_BOOKS}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default bookReducer;
