import React from 'react';
import CALCULATOR from '../../Components/Calculator';
import FORM from '../../Components/Form';
import HEADER from '../../Layouts/Header';
import { Provider } from 'react-redux';
import dnativestore from '../../Redux/reducers';
import { createStore } from 'redux';

const store = createStore(
  dnativestore,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      stateSanitizer: (state) =>
        state.data ? { ...state, data: '<<LONG_BLOB>>' } : state,
    })
);

const HOME = (props) => {
  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <HEADER></HEADER>
          <FORM error={false}></FORM>
          <CALCULATOR />
        </Provider>
      </div>
    </>
  );
};

export default HOME;
