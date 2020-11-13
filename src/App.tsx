import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Headline from "./components/Headline";
import Main from "./components/Main";
import Browse from "./components/Browse";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Route path="/" component={Header} />
        <Route path="/" exact component={Headline} />
        <Route path="/" exact component={Main} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
