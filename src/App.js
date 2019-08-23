import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route, NavLink } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationsList';
import CharactersList from './components/CharacterList';
import Home from './components/Home';


export default function App() {
  return (
    <main>
      <Header />
      <h1>Welcome to the ultimate fan site</h1>
      <ul className="tab-bar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
    </NavLink>

        </li>
        <li>
          <NavLink to="/character" activeClassName="activeNavButton">
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
      <Route exact path="/home" component={Home} />
      <Route path="/character" component={CharactersList} />
      <Route path="/location" component={LocationList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
