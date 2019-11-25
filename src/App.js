import React,{useState} from "react";
import "./App.css"
import {Router,Link} from "@reach/router";
import SearchParams from "./organisms/SearchParams";
import Details from "./organisms/Details";
import ThemeContext from "./atoms/ThemeContext";

const App = () => {
      const themeHook = useState('peru');
      return (
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
      );
};

export default App;