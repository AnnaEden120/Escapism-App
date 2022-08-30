import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Route,
  Routes,
  Router,
  Switch
} from "react-router-dom";
import MyList from "./pages/MyList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/pages/mylist" component={MyList} />
        </Switch>
      </Routes>
    </Router>
  </React.StrictMode>
);
