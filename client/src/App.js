import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import react pages 
import Consent from "./pages/Consent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
//Import style sheet 
import './App.css';
// import user from "../../models/user";

// ReactDOM.render(<App />, document.getElementById("root"));

export default function App() {
//   const [address, setAddress] = useState ([])
//   const getAddressInfo = async () => {
//     try {
//       const zipcode = $(user.zipcode).val().trim()
//       const searchString = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zipcode}&key=AIzaSyCdgqZ9mJc1Qxkg4JcgRLX1d2_ToFGq1hU`
//       const response = await fetch(searchString)
//       const myStuff = await response.json()
//       setAddress(myStuff.main)

//       $("#submitButton").on("click", function(){
//       $("#ward").html("")
//         console.log(zipcode)
        
//         let address = zipcode
//         callAddress(address, ward)
//       })
//     } 
//       catch (err){
//     }
//   }

//   function displayWard() {

//   }

//   const handleSearch = (event) => {
//     event.preventDefault();
//     getAddressInfo();
// }
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
          {/* <form onSubmit={handleSearch}>
          <input type="submit" value="Search"/>
          </form> */}
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/consent">
            <Consent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}