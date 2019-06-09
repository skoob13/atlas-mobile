import types from '../types';

const initialState = {
  list: [],
  data: {},
};

export default (state = initialState, action) => {
  if (action.type === types.lists.getLists.success) {
    return {
      list: action.payload.result.results,
      data: action.payload.entities.djangoEntities,
    };
  }

  return state;
};
