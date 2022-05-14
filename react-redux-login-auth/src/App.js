// import logo from './logo.svg';
import "./App.css";
// import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";
// import BoardAdmin from "./components/BoardAdmin";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
        </Routes>
    </div> 
    </div>
  );
}

export default App;
