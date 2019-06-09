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
