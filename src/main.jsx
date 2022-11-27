import { render } from "preact";
import { App } from "./app";
import "./index.css";
import Router from "preact-router";
import ThankYou from "./ThankYou";

const Main = () => (
  <Router>
    <App path="/" />
    <ThankYou path="/thank/:user" />
  </Router>
);

render(<Main />, document.body);
