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
import AllRecords from "./pages/AllRecords";
import { useCurrentUser } from "./context/CurrentUserContext"

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className="App">
      <Navigation />
      <Switch>
     

       <Route
            exact
            path="/"
            render={() => (
              <AllRecords />
            )}
          />

          <Route
            exact
            path="/MyRecords"
            render={() => (
              <AllRecords
                message="You haven't uploaded any records."
                filter={`advertiser__profile=${profile_id}&ordering=-record__created_&`}
              />
            )}
          />
         
      
        <Route exact path="/markets" render={() => <Markets />} />
        <Route exact path="/markets/add" render={() => <AddMarket />} />
        <Route exact path="/records/add" render={() => <AddRecord />} />
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        <Route exact path="/login" render={() => <LogIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/mymarkets" render={() => <h1>My markets</h1>} />
        <Route exact path="/myrecords" render={() => <h1>My records</h1>} />
        <Route exact path="/records/:id" render={() => <OneRecord />} />
        <Route exact path="/markets/:id" render={() => <OneMarket />} />
        <Route render={() => <p>This page is not found!</p>} />
      </Switch>
    </div>
  );
}

export default App;
