import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import devTools from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import apiConfig from './helpers/setup';
import { auth, places, categories, saved } from './reducers';
import sagas from './sagas';


const persistedPlaces = persistReducer({
  key: 'places',
  storage,
}, places);

const persistedSaved = persistReducer({
  key: 'saved',
  storage,
}, saved);

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  let enhancers = compose(applyMiddleware(sagaMiddleware));

  if (__DEV__) {
    enhancers = compose(
      applyMiddleware(sagaMiddleware),
      devTools({
        realtime: true,
        port: 3003,
      }),
    );
  }

  const reducers = combineReducers({
    auth,
    categories,
    places: persistedPlaces,
    saved: persistedSaved,
    api: combineReducers(apiConfig.reducers),
  });

  // const rootReducer = (state, action) => {
  //   if (action.type === utils.resetState) {
  //     // eslint-disable-next-line
  //     state = undefined;
  //   }

  //   return reducers(state, action);
  // };

  const store = createStore(reducers, enhancers);

  // eslint-disable-next-line
  sagaMiddleware.run(function* () {
    // eslint-disable-next-line
    for (const saga of [apiConfig.rootSaga, ...sagas]) {
      yield spawn(saga);
    }
  });

  return {
    persistor: persistStore(store),
    store,
  };
};
