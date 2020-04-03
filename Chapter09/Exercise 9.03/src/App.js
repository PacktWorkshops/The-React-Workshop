import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const Items = [
  "Lorem Ipsum",
  "Ipsum Dipsum",
  "Foo Bar",
  "A little black cat",
  "A lazy fox",
  "A jumping dog"
];

const doSearch = term => {
  if (!term) {
    return Items;
  }
  return Items.filter(
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
};

const Search = props => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get("q");
  const returned = doSearch(term);
  return (
    <div className="Search">
      <h1>Search Page</h1>
      <hr />
      Found results for {term}:
      <ul>
        {returned.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const Homepage = () => (
  <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default App;
