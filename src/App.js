import React,{useState} from "react";
import "./App.css"
import createHashSource from 'hash-source';
import {Router,createHistory,LocationProvider} from "@reach/router";
import SearchParams from "./organisms/SearchParams";
import Details from "./organisms/Details.tsx";
import ThemeContext from "./atoms/ThemeContext.tsx";
import NavBar from "./molecules/Navbar";

let source = createHashSource();
let history = createHistory(source);

const App = () => {
      const themeHook = useState('darkblue');
      return (
          <LocationProvider history={history}>
              <ThemeContext.Provider value={themeHook}>
                <div>
                    <NavBar/>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
              </ThemeContext.Provider>
          </LocationProvider>
      );
};

export default App;