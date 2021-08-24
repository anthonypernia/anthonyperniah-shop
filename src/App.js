import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ItemListContainer} from './components/ItemListContainer';
import {NavBar} from './components/NavBar';
import {data} from './components/data'
import { ItemDetailContainer } from './components/ItemDetailContainer';

import './App.css';

function App() {
  const [dataProducts, setDataProducts] = React.useState(data);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer  dataProducts = {dataProducts} />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer dataProducts = {dataProducts} />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;


///<NavBar />