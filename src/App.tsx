import React, { Component } from "react";
import Home from "./pages/home";

import "antd/dist/antd.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="main__wrap">
        <Home />
        {/* <Link to="/" component={<Home />} /> */}
        {/* <Link to="/docs" component={<Docs />} /> */}
      </div>
      // {/* </Router> */}
    );
  }
}

export default App;
