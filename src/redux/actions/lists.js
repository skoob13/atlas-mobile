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

export const getSaved = () => ({
  type: listTypes.getSaved.request,
  method: 'get',
  url: 'places/saved/',
  request: {
    params: {
      limit: 200,
    },
  },
});

export const postSaved = (pk, to) => ({
  type: listTypes.postSaved.request,
  method: 'post',
  url: `places/${pk}/saved/`,
  pk,
  to,
});

export const putEmotion = (pk, to) => ({
  type: listTypes.putEmotion.request,
  method: 'put',
  url: `places/${pk}/marks/`,
  request: {
    body: {
      mark: to,
    },
  },
  pk,
  to,
});
