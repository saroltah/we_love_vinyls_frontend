import Navigation from "./elements/Navigation";
import SignUp from "./authentication/SignUp";
import LogIn from "./authentication/LogIn";
import Markets from "./pages/Markets";
import OneRecord from "./pages/OneRecord";
import AddRecord from "./pages/AddRecord";
import AddMarket from "./pages/AddMarket";
import OneMarket from "./pages/OneMarket";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./api/AxiosDefaults";
import Records from "./pages/Records";
import MyRecords from "./pages/MyRecords";
import MyMarkets from "./pages/MyMarkets";
import EditRecord from "./pages/EditRecord";

function App() {
   return (
    <div className="App">
      <Navigation />
      <Switch>    
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
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
        <Route exact path="/myrecords" render={() => <MyRecords/>} />
        
        <Route
            exact
            path="/markets"
            render={() => (
              <Markets message="No results found. Adjust the search keyword." />
            )}
          />
        <Route exact path="/markets/:id" render={() => <OneMarket />} />
        <Route exact path="/markets/add" render={() => <AddMarket />} />
        <Route exact path="/mymarkets" render={() => <MyMarkets/>} />
   
        
        
        <Route render={() => <p>This page is not found!</p>} />
      </Switch>
    </div>
  );
}

export default App;
