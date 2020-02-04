import React from 'react';
import {Link, useRouteMatch, Switch, Route, useParams, Redirect} from "react-router-dom";

function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <div className="row">
      <div className="sidebar">
        Sidebar
      </div>
      <div className="main">
        <div className="navbar">
          <Link to={`${url}/map`}>Map</Link>
          <Link to={`${url}/chart`}>Chart</Link>
          <Link to={`${url}/table`}>Table</Link>
        </div>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a widget.</h3>
          </Route>
          <Route path={`${path}/unknown`}>
            <UnknownWidget />
          </Route>
          <Route path={`${path}/:widgetName`}>
            <Widget />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

function Widget() {
  let { widgetName } = useParams();
  let { path } = useRouteMatch();
  if (!['map', 'chart', 'table'].includes(widgetName)) {
    return <Redirect to={path.replace(':widgetName', 'unknown')} />
  }

  return (
    <div>
      <h3>Widget: {widgetName}</h3>
    </div>
  );
}

function UnknownWidget() {
  return (
    <div>
      <h3>Unknown Widget</h3>
    </div>
  );
}

export default Dashboard;

