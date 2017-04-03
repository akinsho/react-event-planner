import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';


import styled, {injectGlobal} from 'styled-components';
import App from './components/app.js';

injectGlobal`
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

`;


const Wrapper = styled.div`
height: 100%;
border: solid 1px green;
`;

/* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

  ReactDOM.render(

    <Wrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </Wrapper>,
    document.getElementById('root')
);
