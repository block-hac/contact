import React from  'react';
import ContactApp from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';
export default function App() {
  return (
    <Provider store={store}>
      <ContactApp />
    </Provider>
  )
}