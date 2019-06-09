import { createType } from 'redux-entities';
import { djangoPaginationSchema } from 'redux/helpers/schema';

export const getPlaces = createType({
  type: 'places/get',
  reducer: 'getPlaces',
  schema: djangoPaginationSchema,
});

export const getCategories = createType({
  type: 'categories/get',
  reducer: 'getCategories',
  schema: djangoPaginationSchema,
});

export const getSaved = createType({
  type: 'saved/get',
  reducer: 'getSaved',
  schema: djangoPaginationSchema,
});

export const postSaved = createType({
  type: 'saved/post',
  reducer: 'postSaved',
});

export const putEmotion = createType({
  type: 'emotion/put',
  reducer: 'putEmotion',
});

export const postRoute = createType({
  type: 'post-route',
  reducer: 'postRoute',
});
