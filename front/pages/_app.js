import React from 'react';
import Head from 'next/head';
import Proptypes from "prop-types";
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux'
import reducer  from "../reducers";

//Component는 next에서 넣어주는 props
const NodeBird = ({ Component ,store}) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};
NodeBird.proptypes = {
    Component: Proptypes.elementType,
    store:Proptypes.object
}

export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(
      applyMiddleware(...middlewares),
      !options.isServer&& window.__REDUX_DEVTOOLS_EXTENSION__!=='undefined'? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
  })(NodeBird);