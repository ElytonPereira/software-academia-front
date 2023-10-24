import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import Routering from './routes/routes';
import Provider from './context/Provider';
import RegistrarUser from './components/registrarUser/RegistrarUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Routering />
      <RegistrarUser/>
    </Provider>
  </React.StrictMode>
);

