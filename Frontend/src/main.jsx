
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './ContextApi/AuthProvider.jsx';
import { CartProvider } from './ContextApi/CartContext.jsx';
import { CounterProvider } from './ContextApi/CounterContextApi.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
    <CounterProvider>
     <CartProvider>
        <App />
     </CartProvider>
        </CounterProvider>
    </AuthProvider>
);


