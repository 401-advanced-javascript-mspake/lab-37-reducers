

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'create_bookshelf':
      return [...state, payload];

    case 'delete_bookshelf':
      return state.filter(shelf => shelf.id !== payload.id);

    case 'update_bookshelf':
      return state.map(shelf => (shelf.id === payload.id ? payload : shelf));

    default:
      return state;
  }
};
