import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import reportWebVitals from './reportWebVitals';
import Routes from "./routes";
import CartContextProvider from './contexts/CartContext';


ReactDOM.render(
    <HelmetProvider>
        <ProductsContextProvider>
            <CartContextProvider>
                <Routes />
            </CartContextProvider>
        </ProductsContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
