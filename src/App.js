import "./CSS/App.css";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import routesConfig from "./routesConfig";

//consumir app com AXIOS
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Link to="/"> Home&emsp;</Link>
          <Link to="/ecommerce"> Ecommerce&emsp;</Link>
          <Link to="/cadastrar"> Cadastrar&emsp;</Link>
        </div>
        {routesConfig.map((value, key) => {
          return (
            <Route
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          );
        })}
      </div>
    );
  }
}
export default App;
