

export default (state = {}, { type, payload }) => {
  let updatedState;
  let books;

  switch (type) {
    case 'create_bookshelf':
      return { ...state, [payload.id]: [] };

    case 'delete_bookshelf':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;

    case 'create_book':
      books = state[payload.shelfId];
      return { ...state, [payload.shelfId]: [...books, payload] };

    case 'delete_book':
      books = state[payload.shelfId];
      return { ...state, [payload.shelfId]: books.filter(book => book.id !== payload.id) };

    case 'update_book':
      books = state[payload.shelfId];
      return { ...state, [payload.shelfId]: books.map(book => (book.id === payload.id ? payload : book)) };

    default:
      return state;
  }
};
