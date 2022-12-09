import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Amazing from './Components/Amazing';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={reducer}>
      <Amazing />
    </StateProvider>

  </React.StrictMode>
  
);
