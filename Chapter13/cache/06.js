import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import uuid from "uuid";

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
  const [state] = React.useContext(CacheContext);

  return (
    <>
      <div>
        <Link to="/create">create new</Link>
      </div>
      <div>---</div>
      {state.recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </div>
        );
      })}
    </>
  );
};

const CacheContext = React.createContext();

const CacheContextProvider = props => {
  const [state, dispatch] = React.useReducer(state => state, {
    recipes
  });

  return (
    <CacheContext.Provider value={[state, dispatch]}>
      {props.children}
    </CacheContext.Provider>
  );
};

const mockApi = recipe => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!recipe.title && !!recipe.description) {
        const target = { ...recipe, id: uuid() };
        recipes.push(target);
        resolve(target);
      } else {
        reject(new Error("Missing field"));
      }
    }, 1500);
  });
};

const useCreateRecipe = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(undefined);
  const [, dispatch] = React.useContext(CacheContext);

  return {
    loading,
    error,
    success,
    createRecipe: recipe => {
      setLoading(true);

      mockApi(recipe)
        .then(apiResponse => {
          setLoading(false);
          setError(undefined);
          setSuccess(true);
        })
        .catch(e => {
          console.log(e);
          setError(e.message);
          setSuccess(false);
          setLoading(false);
        });
    }
  };
};

const Create = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div>
      create a new recipe
      <div>
        <input
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button>save</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CacheContextProvider>
        <Recipes />
        <Switch>
          <Route exact path="/recipes/:id" component={Recipe} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </CacheContextProvider>
    </BrowserRouter>
  );
};

export default App;
