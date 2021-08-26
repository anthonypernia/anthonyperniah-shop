import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer';
import {NavBar} from './components/NavBar';
import {data} from './components/data'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContext } from './context/cartContext';
import { CartContainer } from './components/CartContainer';

import './App.css';

function App() {
  const [dataCart, setDataCart] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [dataProducts, setDataProducts] = React.useState(data);
  
  return (
    <CartContext.Provider value = {dataCart}>
      <BrowserRouter>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Switch>
          <Route exact path={["/", "/category/:categoryId"]}>
            <ItemListContainer  dataProducts = {dataProducts} searchValue={searchValue} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer dataProducts = {dataProducts} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer dataProducts = {dataProducts} />
          </Route>
          <Route exact path="/cart/">
            <CartContainer />
          </Route>
        </Switch>

      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;


///<NavBar />