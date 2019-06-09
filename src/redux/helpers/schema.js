import { schema } from 'normalizr';


export const djangoPaginationSchema = {
  results: [new schema.Entity('djangoEntities')],
};
