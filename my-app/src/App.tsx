import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainView from "./components/MainView";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Validation from "./components/Validation";

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="container"
        style={{ position: "absolute", right: "50px", top: "50px" }}
      >
        <Route exact path="/" component={() => <Redirect to="/validation" />} />
        <Route exact path="/validation" component={Validation} />
      </div>
      <Route exact path="/main" component={MainView} />
    </Router>
  );
};

export default App;
