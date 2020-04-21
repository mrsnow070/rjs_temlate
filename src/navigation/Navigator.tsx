import React from "react";
import { TestScreen1, TestScreen2, TestScreen3 } from "../screen/TestScreens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Navigator() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <TestScreen1 {...props} />} />
        <Route
          exact
          path="/next"
          render={(props) => <TestScreen2 {...props} />}
        />
        <Route
          path="/next-next"
          render={(props) => <TestScreen3 {...props} />}
        />
      </Switch>
    </Router>
  );
}
