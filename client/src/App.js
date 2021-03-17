import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import react pages 
import Consent from "./pages/Consent";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
//Import style sheet 
import './App.css';

// ReactDOM.render(<App />, document.getElementById("root"));

export default function App() {
  const [address, setAddress] = useState ([])
  const getAddressInfo = async () => {
    try {
      const searchString = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=20007&key=AIzaSyCdgqZ9mJc1Qxkg4JcgRLX1d2_ToFGq1hU`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      setAddress(myStuff.main)
    } 
      catch (err){
    }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    getAddressInfo();
}
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
          <form onSubmit={handleSearch}>
          <input type="submit" value="Search"/>
          </form>
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/consent">
            <Consent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}