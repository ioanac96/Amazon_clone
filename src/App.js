import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  },[]);

  console.log("user", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
