import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineActionsMiddleware from 'redux-combine-actions';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(combineActionsMiddleware),
      process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  return store;
}
