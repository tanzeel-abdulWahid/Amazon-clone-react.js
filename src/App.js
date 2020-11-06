import React, {useEffect} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import { auth } from './firebase';


function App() {

  const [{user}, dispatch] = useStateValue();

  //useeffect
  //runs on given condition
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser)=> {
    if (authUser){
      //the user is logged in
      dispatch({
        type: "SET_USER",
        user : authUser ,
      })
    } else{
      //the user is logged out
      dispatch({
        type: "SET_USER",
        user : null ,
      })
    }
  });
    return () =>{
      //any clean uu operations go in here
      unsubscribe();
    }
  }, [])

  console.log("user",user);
  return (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/checkout'>
        <Header />
        <Checkout />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
      </Switch>
    </Router>
  </div>
  )}

export default App;
