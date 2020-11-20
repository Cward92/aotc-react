import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {AppProvider} from "./Components/Helper/AppContext";

import Explore from "./Components/Explore";
import Login from './Components/Login';
import Register from './Components/Register';
import UserHello from './Components/UserHello';


function App() {

  const [token, setToken] = useState('');

  useEffect( () => {
    let sessionToken = sessionStorage.getItem('token');
    if(sessionToken){
      setToken(sessionToken);
    }
  }, [] )
  
  return (
    <Router>
      <AppProvider value={{ token, setToken }}>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/userhello">
              <UserHello />
            </Route>
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
}

function Home() {
  return (
    <p>Home</p>
  );
}

export default App;
