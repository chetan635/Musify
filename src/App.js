import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Leftnavbar from './Components/Leftnavbar';
import Search from './Components/Search';
import SearchByAlbum from './Components/SearchByAlbum';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Playlist from './Components/Playlist';

function App() {

  // const [toggle, settoggle] = useState(true)


  return (
    <Router>
      
        <div className="row">
      <div className="col-md-3">
        <Leftnavbar/>
      </div>
      <div className="col-md-9">
        <Navbar/>
        {/* <Search/> */}
        <Switch>
          <Route exact path="/">
            <Search key="1"/>
          </Route>
          <Route  path="/playlist">
              <Playlist/>
          </Route>
          <Route  path="/SearchByAlbum">
              <SearchByAlbum/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
