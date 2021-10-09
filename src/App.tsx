import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./features/header";
import aquarium from "./features/aquarium";
import login from "./features/login";
import counterBoard from "./containers/example";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/example/CounterBoard" component={counterBoard} />
        <Redirect from="/user/profile/:userId" to="/user/:userId" />
        <Route path="/user/:userId" component={aquarium} />
        <Route exact path="/" component={aquarium} />
        <Redirect push to="/" />
      </Switch>
    </>
  );
};

export default App;
