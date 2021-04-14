import "../CSS/App.css";
import React, { Component, useRef } from "react";
import { Button } from "primereact/button";
import InserirForm from "../pages/InserirForm";
import { Link } from "react-router-dom";
import Login from "../pages/Login1";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login></Login>
          <div class="btn-group">            
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
