import React from 'react';

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Info from "./components/Info";

import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

var style = {
  color: "green"
};



const activeEvent = (match, location) => {
  if (!match){
    return false;
  }
  console.log("active on : " + match.url)
}
//do something



const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={style} to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <NavLink isActive = {activeEvent} activeStyle={{color: 'orange'}}  to="/users">Users</NavLink>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);



export default App;
