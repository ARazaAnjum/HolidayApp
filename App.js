/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './src/reducers';
import Routes from './src/routes/routes';
import logger from 'redux-logger';
import saga from './src/saga';

import createSagaMiddleware from 'redux-saga';


export default class App extends React.Component {

  render() {
    const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
      const store = createStore(reducers, compose(applyMiddleware(logger, sagaMiddleware)));
      sagaMiddleware.run(saga);
      return store;
    };
    const store = configureStore();
    return (
      <Fragment>
        <Provider store={store}>
          <Routes  />
        </Provider>
      </Fragment>
    );
  }


}
