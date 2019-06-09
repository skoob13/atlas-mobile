import * as listTypes from 'redux/types/lists';

export const getPlaces = () => ({
  type: listTypes.getPlaces.request,
  method: 'get',
  url: 'places/',
  request: {
    params: {
      limit: 200,
    },
  },
});

export const getCategories = () => ({
  type: listTypes.getCategories.request,
  method: 'get',
  url: 'places-categories/',
  request: {
    params: {
      limit: 200,
    },
  },
});
