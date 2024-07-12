import Navigation from "./Navigation";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <h1>Records</h1>} />
        <Route exact path="/markets" render={() => <h1>Markets</h1>} />
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        <Route exact path="/login" render={() => <h1>Log in</h1>} />
        <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
        <Route render={() => <p>This page is not found!</p>} />
      </Switch>
    </div>
  );
}

export default App;
