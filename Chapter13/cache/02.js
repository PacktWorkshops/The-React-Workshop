import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Bacon & eggs",
    description:
      "commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo"
  },
  {
    id: 2,
    title: "Pancakes",
    description:
      "commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo"
  },
  {
    id: 3,
    title: "Suzie's stew",
    description:
      "commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo"
  }
];

const Recipe = () => null;

const Recipes = () => {
  return (
    <>
      <div>
        <Link to="/create">create new</Link>
      </div>
      <div>---</div>
      {recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </div>
        );
      })}
    </>
  );
};

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
