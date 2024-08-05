import Navigation from "./elements/Navigation";
import SignUp from "./pages/authentication/SignUp";
import LogIn from "./pages/authentication/LogIn";

import Markets from "./pages/Markets/Markets";
import AddMarket from "./pages/Markets/AddMarket";
import OneMarket from "./pages/Markets/OneMarket";
import MyMarkets from "./pages/Markets/MyMarkets";
import EditMarket from "./pages/Markets/EditMarket";

import OneRecord from "./pages/Records/OneRecord";
import AddRecord from "./pages/Records/AddRecord";
import Records from "./pages/Records/Records";
import MyRecords from "./pages/Records/MyRecords";
import EditRecord from "./pages/Records/EditRecord";
import AllRecords from "./pages/Records/AllRecords";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./api/AxiosDefaults";

import OneProfile from "./pages/Users/OneProfile";
import EditProfile from "./pages/Users/EditProfile";
import EditPassword from "./pages/Users/EditPassword";

function App() {
   return (
    <div className="container">
    <div className="App">
      <Navigation/>
      <div className="Content">
      <Switch>    
        <Route exact path="/users/:id" render={() => <OneProfile/>} />
        <Route exact path="/users/:id/edit" render={() => <EditProfile/>} />
        <Route exact path="/users/:id/edit/password" render={() => <EditPassword/>} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route
            exact
            path="/"
            render={() => (
              <Records message="No results found. Adjust the search keyword." />
            )}
          />
        <Route exact path="/records/:id" render={() => <OneRecord />} />
        <Route exact path="/records/:id/edit" render={() => <EditRecord />} />
        <Route exact path="/records/add" render={() => <AddRecord />} />
        <Route exact path="/records/" render={() => <AllRecords />} />
        <Route exact path="/myrecords" render={() => <MyRecords/>} />
        
        <Route
            exact
            path="/markets"
            render={() => (
              <Markets message="No results found. Adjust the search keyword." />
            )}
          />
        <Route exact path="/markets/:id" render={() => <OneMarket />} />
        <Route exact path="/markets/:id/edit" render={() => <EditMarket />} />
        <Route exact path="/markets/add" render={() => <AddMarket />} />
        <Route exact path="/mymarkets" render={() => <MyMarkets/>} />
   
        
        
        <Route render={() => <p>This page is not found!</p>} />
      </Switch>
      </div>
    </div>
    </div>
  );
}

export default App;
