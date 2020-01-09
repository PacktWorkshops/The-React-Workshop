import React from "react";

const About = () => (
  <div className="About">
    <h1>About Page</h1>
    <hr />
    <p>Information about your app or who you are would go here!</p>
  </div>
);

const RouteTo = path => {
  const paths = path
    .split("/")
    .map(p => p.toLowerCase())
    .slice(1);
  switch (paths[0]) {
    case "about":
      return <About />;
    default:
      return <div className="Default">Default Route</div>;
  }
};

const App = () => (
  <div className="Router">
    <h1>Example Router</h1>
    <hr />
    <p>href: {window.location.href}</p>
    <p>path: {window.location.pathname}</p>
    <hr />
    {RouteTo(window.location.pathname)}
  </div>
);

export default App;
