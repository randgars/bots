import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise';
import { redirect } from '../middlewares/redirect';


function reduxStore(initialState) {
  

  const store = createStore(reducers, initialState, compose(
    applyMiddleware(reduxLogger),
    applyMiddleware(thunk),
    applyMiddleware(promise),
    applyMiddleware(redirect)
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers').rootReducer;  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
