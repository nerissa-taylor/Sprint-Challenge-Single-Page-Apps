import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <ul className="tab-bar">
        <li>
          <NavLink exact to="/character" activeClassName="activeNavButton">
            Character
    </NavLink>
        </li>
        <li>
          <NavLink to="/location" activeClassName="activeNavButton">
            Locations
    </NavLink>
        </li>
        <li>
          <NavLink to="/episode" activeClassName="activeNavButton">
            Episode
    </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Character} />
      <Route path="/location" component={Location} />
      <Route path="/episode" component={Episode} />
    </main>
  );
}
