import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EntryForm from "../components/entryForm/entryForm";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EntryForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
