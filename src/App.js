//import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/rooms" component={Rooms} />
        <Route eaxct path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
