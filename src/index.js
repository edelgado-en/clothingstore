import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { CartProvider } from './context/cart.context';

import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
/*   <React.StrictMode>  THIS MAKES USEEFFECT GETS CALLED TWICE IN DEV MODE. ITS REALLY CONFUSING*/
      <Provider store={store} >
        <BrowserRouter>
            <CartProvider>
                <App />
            </CartProvider>
        </BrowserRouter>
      </Provider>
/*   </React.StrictMode> */
);

