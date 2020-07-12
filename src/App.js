import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Main>
      <Route exact path="/" component={Search}/>
      {/* <Route exact path="/saved" component={Saved}/> */}
      </Main>
    </div>
    </Router>
  );
}

export default App;
