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
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "create_recipe":
          return {
            recipes: [...state.recipes, action.payload.recipe],
            entries: {
              ...state.entries,
              [action.payload.recipe.id]: action.payload.recipe
            }
          };

        case "add_entry":
          return {
            ...state,
            entries: {
              ...state.entries,
              [action.payload.recipe.id]: action.payload.recipe
            }
          };

        default:
          return state;
      }
    },
    {
      recipes,
      entries: {}
    }
  );

  console.log(state);

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

const useRecipe = id => {
  const [state, dispatch] = React.useContext(CacheContext);
  const [loading, setLoading] = React.useState(true);

  const [value, setValue] = React.useState(undefined);

  React.useEffect(() => {
    if (!state.entries[id]) {
      setLoading(true);
      setTimeout(() => {
        const target = recipes.find(i => {
          return i.id === id;
        });

        if (target) {
          dispatch({ type: "add_entry", payload: { recipe: target } });
        }

        setValue(target);
        setLoading(false);
      }, 2000);
    } else {
      setValue(state.entries[id]);
    }
  }, [id, dispatch, state.entries]);

  return {
    loading,
    recipe: value
  };
};

const Recipe = props => {
  const id = parseInt(props.match.params.id, 10);

  const { loading, recipe } = useRecipe(id);

  if (loading) return "...";

  return (
    <div>
      {recipe.title}
      <div>{recipe.description}</div>
    </div>
  );
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
          dispatch({ type: "create_recipe", payload: { recipe: apiResponse } });

          setLoading(false);
          setError(undefined);
          setSuccess(true);
        })
        .catch(e => {
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

  const { createRecipe, error, success, loading } = useCreateRecipe();

  return (
    <div>
      create a new recipe
      <div>
        {success && <div style={{ color: "green" }}>saved</div>}
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
        {loading && <div>...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div>
          <button onClick={() => createRecipe({ title, description })}>
            save
          </button>
        </div>
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
