import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ItemListContainer} from './components/ItemList/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { CartContainer } from './components/Cart/CartContainer';
import { DataUserEnterContainer } from './components/DataUserEnter/DataUserEnterContainer';
import './App.css';


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <CartProvider >
      <BrowserRouter>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Switch>
          <Route exact path={["/", "/category/:categoryId"]}>
            <ItemListContainer  searchValue={searchValue} />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart/">
            <CartContainer />
          </Route>
          <Route exact path="/datauserenter/">
            <DataUserEnterContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;


///<NavBar />