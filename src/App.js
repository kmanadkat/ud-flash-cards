import React from 'react';
import { Provider } from 'react-redux';
import MyApp from './Components/MyApp';
import { store } from './Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}
