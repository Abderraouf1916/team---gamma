import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home2 from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div className="content-container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home2} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
