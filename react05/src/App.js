import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
// import ReduxTest from './components/ReduxTest';
import RouteSample from './components/RouteSample'

function App () {
  return (
    <div >
      <Provider store={store}>
        <RouteSample />
      </Provider>
    </div>
  );
}

export default App;
