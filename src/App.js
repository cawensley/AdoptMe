import React,{useState} from "react";
import "./App.css"
import createHashSource from 'hash-source';
import {Router,Link,createHistory,LocationProvider} from "@reach/router";
import SearchParams from "./organisms/SearchParams";
import Details from "./organisms/Details";
import ThemeContext from "./atoms/ThemeContext";

let source = createHashSource();
let history = createHistory(source);

const App = () => {
      const themeHook = useState('peru');
      return (
          <LocationProvider history={history}>
              <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
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