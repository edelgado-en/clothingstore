import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
/*   <React.StrictMode>  THIS MAKES USEEFFECT GETS CALLED TWICE IN DEV MODE. ITS REALLY CONFUSING*/
      <Provider store={store} >
           <PersistGate persistor={persistor}> 
            <BrowserRouter>
                <App />
            </BrowserRouter>
           </PersistGate> 
      </Provider>
/*   </React.StrictMode> */
);

