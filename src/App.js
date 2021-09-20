import React from 'react';
import { CartProvider } from './components/Context/CartContext';
import './App.css';
import {AppUI} from './AppUI';


function App() {

  return (
    <CartProvider >
      <AppUI/>
    </CartProvider>

  );
}

export default App;


///<NavBar />