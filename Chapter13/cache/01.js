import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Recipe = () => null;

const Recipes = () => null;

const Create = () => null;

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Recipes />
        <Switch>
          <Route exact path="/recipes/:id" component={Recipe} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
