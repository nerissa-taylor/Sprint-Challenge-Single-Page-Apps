import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route, NavLink } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationsList';
import CharactersList from './components/CharacterList';


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
      <Route exact path="/" component={CharactersList} />
      <Route path="/location" component={LocationList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
