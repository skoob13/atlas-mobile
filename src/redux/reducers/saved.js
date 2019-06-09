import types from '../types';

const initialState = {
  list: [],
  data: {},
};

export default (state = initialState, action) => {
  if (action.type === types.lists.getSaved.success) {
    return {
      list: action.payload.result.results,
      data: action.payload.entities.djangoEntities,
    };
  }

  if (action.type === types.lists.postSaved.request) {
    return {
      list: state.list,
      data: {
        ...state.data,
        [action.pk]: {
          ...state.data[action.pk],
          isSaved: action.to,
        },
      },
    };
  }

  if (action.type === types.lists.putEmotion.request) {
    return {
      list: state.list,
      data: {
        ...state.data,
        [action.pk]: {
          ...state.data[action.pk],
          rating: action.to,
        },
      },
    };
  }

  return state;
};
