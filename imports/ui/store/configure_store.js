import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  return store;
}
