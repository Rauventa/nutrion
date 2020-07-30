import React from 'react';
import {Switch, Route} from "react-router-dom";
import Main from "../Pages/Main";
import Cart from "../Pages/Cart";
import DrowUp from "../Pages/DrowUp";
import Catalog from "../Pages/Catalog";

export const Router = () => {
  return (
      <Switch>
          <Route path={'/'} exact>
              <Main />
          </Route>

          <Route path={'/shop'}>
              <Catalog />
          </Route>

          <Route path={'/cart'} exact>
              <Cart />
          </Route>
          <Route path={'/cart/information'}>
              <DrowUp />
          </Route>
      </Switch>
  )
};