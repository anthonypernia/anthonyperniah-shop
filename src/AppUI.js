import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ItemListContainer} from './components/ItemList/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { CartContainer } from './components/Cart/CartContainer';
import { DataUserEnterContainer } from './components/DataUserEnter/DataUserEnterContainer';
import { ModalLoading } from './components/ModalLoading/ModalLoading';
import {CartContext} from './components/Context/CartContext';
import { LoadingSpinner } from "./components/ModalLoading/LoadingSpinner";
import './App.css';


function AppUI() {
  const [searchValue, setSearchValue] = React.useState('');
  const {openLoadingModal, setOpenLoadingModal} = React.useContext(CartContext);


  return (
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
        {openLoadingModal && 
                <ModalLoading>
                    <LoadingSpinner />
                </ModalLoading>}
      </BrowserRouter>
  );
}

export  {AppUI};