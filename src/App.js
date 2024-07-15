import Navigation from "./elements/Navigation";
import SignUp from "./authentication/SignUp";
import LogIn from "./authentication/LogIn";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./api/AxiosDefaults";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <h1>Records</h1>} />
        <Route exact path="/markets" render={() => <h1>Markets</h1>} />
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/mymarkets" render={() => <h1>My markets</h1>} />
        <Route exact path="/myrecords" render={() => <h1>My records</h1>} />
        <Route render={() => <p>This page is not found!</p>} />
      </Switch>
    </div>
  );
}

export default App;
