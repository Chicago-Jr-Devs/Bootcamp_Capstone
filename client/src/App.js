import Consent from "./pages/Consent";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import ReactDOM from "react-dom";

import './App.css';


//import Home from './pages/Home'
function App() {

  // ReactDOM.render(<App />, document.getElementById("root"));
  return (
    <div>
      <p>Hello World</p>
      <Consent />
      <Main />
      <Register />
      <Login />
    </div>
  );
}

export default App;
