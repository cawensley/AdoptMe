import React from "react";
import "./App.css"
import createHashSource from 'hash-source';
import {Router,createHistory,LocationProvider} from "@reach/router";
import {Provider} from 'react-redux';
import SearchParams from "./organisms/SearchParams";
import Details from "./organisms/Details.js";
import NavBar from "./molecules/Navbar";
import store from "./Redux/store";

let source = createHashSource();
let history = createHistory(source);

const App = () => {
      return (
          <Provider store={store}>
              <LocationProvider history={history}>
                    <div>
                        <NavBar/>
                        <Router>
                            <SearchParams path="/" />
                            <Details path="/details/:id" />
                        </Router>
                    </div>
              </LocationProvider>
          </Provider>
      );
};

export default App;