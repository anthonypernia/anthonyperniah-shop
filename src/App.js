import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ItemListContainer} from './components/ItemList/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { CartContainer } from './components/Cart/CartContainer';
import { DataUserEnterContainer } from './components/DataUserEnter/DataUserEnterContainer';
import { ModalLoading } from './components/ModalLoading/ModalLoading';
import {CartContext} from './components/Context/CartContext';
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